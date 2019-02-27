const V2API = require('./v2')

class CartsAPI extends V2API {
  constructor() {
    super()
    this.resource = 'carts'
  }

  async getCartItems(cartID) {
    return this.get(`${this.resource}/${cartID}/items`)
  }
}

module.exports = CartsAPI
