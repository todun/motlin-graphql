const brandsAPI = require('./brands')
const categoriesAPI = require('./categories')
const collectionsAPI = require('./collections')
const gatewaysAPI = require('./gateways')
const productsAPI = require('./products')
const storesAPI = require('./stores')

module.exports = () => ({
  brandsAPI: new brandsAPI(),
  categoriesAPI: new categoriesAPI(),
  collectionsAPI: new collectionsAPI(),
  productsAPI: new productsAPI(),
  gatewaysAPI: new gatewaysAPI(),
  storesAPI: new storesAPI()
})
