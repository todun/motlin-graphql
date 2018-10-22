const CatalogueAPI = require('./catalogue')

class ProductsAPI extends CatalogueAPI {
  constructor() {
    super()
    this.resource = 'products'
  }
}

module.exports = ProductsAPI
