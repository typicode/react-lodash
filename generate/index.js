const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const del = require('del')
const makeDir = require('make-dir')
const jsdoc2md = require('jsdoc-to-markdown')
const getComponentName = require('./getComponentName')
const getComponentListItem = require('./getComponentListItem')
const render = require('./render')

const src = path.join(__dirname, '../src')

function getDocs() {
  // Get all lodash functions
  const functionNames = _.functions(_)
  console.log(`Found ${functionNames.length} functions`)

  // Find all files associated to lodash functions
  const files = functionNames
    .map(functionName =>
      path.join(__dirname, `../node_modules/lodash/${functionName}.js`)
    )
    .filter(fs.existsSync)
  console.log(`Found ${files.length} files`)

  // Parse JSDoc for each file
  const docs = jsdoc2md
    .getTemplateDataSync({ files })
    .filter(doc => functionNames.includes(doc.name))
  console.log(`Found ${docs.length} docs`)

  return docs
}

function createComponents(docs) {
  console.log('Create Components')

  // Delete src
  del.sync(src)

  // Create src
  makeDir.sync(src)

  // Create components
  count = 1
  docs.forEach(doc => {
    console.log(`-- ${count++} Rendering ${doc.name}`)
    const data = render(doc)
    const filename = path.join(src, `${getComponentName(doc)}.js`)
    fs.writeFileSync(filename, data, 'utf-8')
  })
}

function createIndex(docs) {
  console.log('Create src/index.js')
  const data = docs
    .map(getComponentName)
    .map(name => `export { default as ${name} } from './${name}'`)
    .join('\n')
  fs.writeFileSync(path.join(src, 'index.js'), data)
}

function createComponentsList(docs) {
  console.log('Create components.md')
  const groupedDocs = _.groupBy(docs, 'category')
  const sortByName = docs => _.sortBy(docs, ['name'])
  const sortedGroupedDocs = _.mapValues(groupedDocs, sortByName)
  const getMarkdownList = docs => docs.map(getComponentListItem).join('\n')
  const groupedMarkdownList = _.mapValues(sortedGroupedDocs, getMarkdownList)
  const markdown = Object.keys(groupedMarkdownList)
    .map(category => `## ${category}\n${groupedMarkdownList[category]}`)
    .join('\n\n')

  const data = `# Components\n\n${markdown}`

  fs.writeFileSync(path.join(__dirname, '../components.md'), data, 'utf-8')
}

function main() {
  const docs = getDocs()
  createComponents(docs)
  createIndex(docs)
  createComponentsList(docs)
}

main()
