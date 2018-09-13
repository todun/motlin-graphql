const V2API = require('./v2')

class GatewaysAPI extends V2API {
  async allGateways() {
    return this.get('gateways')
  }

  async getGateway(slug) {
    return this.get(`gateways/${slug}`)
  }

  async update(slug, data) {
    return this.put(`gateways/${slug}`, data)
  }
}

module.exports = GatewaysAPI
