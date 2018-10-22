const CatalogueAPI = require('./catalogue')

class CollectionsAPI extends CatalogueAPI {
  constructor() {
    super()
    this.resource = 'collections'
  }
}

module.exports = CollectionsAPI
