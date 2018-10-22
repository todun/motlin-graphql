const CatalogueAPI = require('./catalogue')

class BrandsAPI extends CatalogueAPI {
  constructor() {
    super()
    this.resource = 'brands'
  }
}

module.exports = BrandsAPI
