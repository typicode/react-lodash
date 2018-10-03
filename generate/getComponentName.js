const _ = require('lodash')

module.exports = function(doc) {
  return _.upperFirst(doc.name)
}
