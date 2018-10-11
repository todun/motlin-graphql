const V1API = require('./v1')

class StoresAPI extends V1API {
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token)
  }

  async getStores() {
    return this.get('accounts/stores')
  }

  async getStore(id) {
    return this.get(`accounts/stores/${id}`)
  }

  async createStore(data) {
    return this.post('accounts/stores', data)
  }

  async updateStore(id, data) {
    return this.put(`accounts/stores/${id}`, data)
  }

  async switchStore(id) {
    return this.get(`account/stores/switch/${id}`)
  }

  async addUser(id, data) {
    return this.post(`accounts/stores/${id}/users`, data)
  }
}

module.exports = StoresAPI
