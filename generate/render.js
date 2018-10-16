const _ = require('lodash')
const { stripIndent } = require('common-tags')
const renderBooleanComponent = require('./renderBooleanComponent')
const renderComponent = require('./renderComponent')

function addDebug(componentString, doc) {
  return stripIndent`
    ${componentString}
  
    /* Used for debugging
    ${JSON.stringify(doc, null, 2)}
    */
  `
}

// Render a React Component based on JSDoc
module.exports = function(doc) {
  let componentString
  if (_.isEqual(_.get(doc, 'returns[0].type.names'), ['boolean'])) {
    componentString = renderBooleanComponent(doc)
  } else {
    componentString = renderComponent(doc)
  }

  if (process.env.NODE_ENV === 'development') {
    return addDebug(componentString, doc)
  } else {
    return componentString
  }
}
