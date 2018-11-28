const V2API = require('./v2')

class IntegrationsAPI extends V2API {
  constructor() {
    super()
    this.resource = 'integrations'
  }

  async createIntegration(data) {
    return this.post(`${this.resource}`, { data })
  }
}

module.exports = IntegrationsAPI
