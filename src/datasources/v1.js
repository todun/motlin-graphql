const { RESTDataSource } = require('apollo-datasource-rest')

class V1API extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.moltin.com/v1'
  }
}

module.exports = V1API
