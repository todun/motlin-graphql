const brandsAPI = require('./brands')
const cartsAPI = require('./carts')
const categoriesAPI = require('./categories')
const collectionsAPI = require('./collections')
const filesAPI = require('./files')
const gatewaysAPI = require('./gateways')
const integrationsAPI = require('./integrations')
const inventoriesAPI = require('./inventories')
const productsAPI = require('./products')
const storesAPI = require('./stores')

module.exports = () => ({
  brandsAPI: new brandsAPI(),
  cartsAPI: new cartsAPI(),
  categoriesAPI: new categoriesAPI(),
  collectionsAPI: new collectionsAPI(),
  filesAPI: new filesAPI(),
  gatewaysAPI: new gatewaysAPI(),
  integrationsAPI: new integrationsAPI(),
  inventoriesAPI: new inventoriesAPI(),
  productsAPI: new productsAPI(),
  storesAPI: new storesAPI()
})
