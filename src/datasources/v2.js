const { RESTDataSource } = require('apollo-datasource-rest')

class V2API extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.moltin.com/v2'
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token)
  }
}

module.exports = V2API
