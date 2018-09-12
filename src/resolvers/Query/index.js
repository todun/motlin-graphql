const accounts = require('./accounts')
const stores = require('./stores')

module.exports = {
  ...accounts,
  ...stores
}
