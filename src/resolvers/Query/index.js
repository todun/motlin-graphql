const accounts = require('./accounts')
const carts = require('./carts')
const stores = require('./stores')
const gateways = require('./gateways')
const products = require('./products')
const brands = require('./brands')
const categories = require('./categories')
const collections = require('./collections')
const integrations = require('./integrations')

module.exports = {
  ...accounts,
  ...carts,
  ...stores,
  ...gateways,
  ...products,
  ...brands,
  ...categories,
  ...collections,
  ...integrations
}
