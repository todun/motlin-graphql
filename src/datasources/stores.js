const { RESTDataSource } = require('apollo-datasource-rest')

class StoresAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.moltin.com/v1/accounts/stores'
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token)
  }

  async getStores() {
    return this.get('/')
  }

  async getStore(id) {
    return this.get(`/${id}`)
  }

  async createStore(data) {
    return this.post('/', data)
  }

  async updateStore(id, data) {
    return this.put(`/${id}`, data)
  }
}

module.exports = StoresAPI
