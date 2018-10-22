const { RESTDataSource } = require('apollo-datasource-rest')

class V2API extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.moltin.com/v2'
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token)
  }

  async findAll() {
    return this.get(`${this.resource}`)
  }

  async findByID(id) {
    return this.get(`${this.resource}/${id}`)
  }

  async findBySlug(slug) {
    return this.get(`${this.resource}/${slug}`)
  }
}

module.exports = V2API
