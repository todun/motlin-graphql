const brandsAPI = require('./brands')
const categoriesAPI = require('./categories')
const collectionsAPI = require('./collections')
const gatewaysAPI = require('./gateways')
const integrationsAPI = require('./integrations')
const productsAPI = require('./products')
const storesAPI = require('./stores')

module.exports = () => ({
  brandsAPI: new brandsAPI(),
  categoriesAPI: new categoriesAPI(),
  collectionsAPI: new collectionsAPI(),
  gatewaysAPI: new gatewaysAPI(),
  integrationsAPI: new integrationsAPI(),
  productsAPI: new productsAPI(),
  storesAPI: new storesAPI()
})
