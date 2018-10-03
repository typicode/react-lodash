const getArgs = require('./getArgs')
const getComponentName = require('./getComponentName')
const { stripIndent } = require('common-tags')

module.exports = function(doc) {
  const componentName = getComponentName(doc)

  return stripIndent`
    import React from 'react'
    import ${doc.name} from 'lodash/${doc.name}'

    export default function ${componentName}(props) {
      return props.children(${doc.name}(${getArgs(doc).join(', ')}))
    }

    ${componentName}.defaultProps = {
      children: value => value
    }
  `
}
