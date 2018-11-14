module.exports = function(doc) {
  return (
    doc.params
      // Ignore options params (example: options.something)
      .filter(({ name }) => !name.includes('.'))
      .map(({ name }) => `props.${name}`)
  )
}
