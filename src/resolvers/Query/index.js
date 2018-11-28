const accounts = require('./accounts')
const stores = require('./stores')
const gateways = require('./gateways')
const products = require('./products')
const brands = require('./brands')
const categories = require('./categories')
const collections = require('./collections')
const integrations = require('./integrations')

module.exports = {
  ...accounts,
  ...stores,
  ...gateways,
  ...products,
  ...brands,
  ...categories,
  ...collections,
  ...integrations
}
