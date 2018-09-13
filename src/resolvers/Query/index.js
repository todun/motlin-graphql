const accounts = require('./accounts')
const stores = require('./stores')
const gateways = require('./gateways')

module.exports = {
  ...accounts,
  ...stores,
  ...gateways
}
