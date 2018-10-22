const CatalogueAPI = require('./catalogue')

class CategoriesAPI extends CatalogueAPI {
  constructor() {
    super()
    this.resource = 'categories'
  }
}

module.exports = CategoriesAPI
