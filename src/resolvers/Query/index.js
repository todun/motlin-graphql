const accounts = require('./accounts')
const stores = require('./stores')
const gateways = require('./gateways')
const products = require('./products')

module.exports = {
  ...accounts,
  ...stores,
  ...gateways,
  ...products
}
