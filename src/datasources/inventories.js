const V2API = require('./v2')

class InventoriesAPI extends V2API {
  constructor() {
    super()
    this.resource = 'inventories'
  }
}

module.exports = InventoriesAPI
