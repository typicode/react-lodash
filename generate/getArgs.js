module.exports = function(doc) {
  return doc.params.map(({ name }) => `props.${name}`)
}
