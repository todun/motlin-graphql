const V2API = require('./v2')

class GatewaysAPI extends V2API {
  constructor() {
    super()
    this.resource = 'gateways'
  }

  async update(slug, data) {
    return this.put(`${this.resource}/${slug}`, data)
  }
}

module.exports = GatewaysAPI
