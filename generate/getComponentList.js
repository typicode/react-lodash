const _ = require('lodash')
const getComponentListItem = require('./getComponentListItem')

module.exports = function(docs) {
  const groupedDocs = _.groupBy(docs, 'category')
  const sortByName = docs => _.sortBy(docs, ['name'])
  const sortedGroupedDocs = _.mapValues(groupedDocs, sortByName)
  const getMarkdownList = docs => docs.map(getComponentListItem).join('\n')
  const groupedMarkdownList = _.mapValues(sortedGroupedDocs, getMarkdownList)
  return Object.keys(groupedMarkdownList)
    .map(category => `### ${category}\n${groupedMarkdownList[category]}`)
    .join('\n\n')
}
