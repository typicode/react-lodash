const getComponentName = require('./getComponentName')
const getLodashDocsUrl = require('./getLodashDocsUrl')

module.exports = function(doc) {
  let props = doc.params
    .map(param => `${param.name}={}`)
    .filter(name => !name.includes('.'))
    .join(' ')
  if (props) props += ' '
  const component = `\`<${getComponentName(doc)} ${props}/>\``
  const lodashDocsLink = `[_.${doc.name}](${getLodashDocsUrl(doc)})`
  return `* ${component} → ${lodashDocsLink}`
}
