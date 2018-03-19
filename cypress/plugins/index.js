const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
  on('file:preprocessor', cucumber())
}
