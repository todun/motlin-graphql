const V2API = require('./v2')

class CartsAPI extends V2API {
  constructor() {
    super()
    this.resource = 'carts'
  }

  async getCartItems(cartID) {
    return this.get(`${this.resource}/${cartID}/items`)
  }

  async addProductToCart(cartID, { productID: id, quantity }) {
    return this.post(`${this.resource}/${cartID}/items`, {
      data: {
        id,
        quantity,
        type: 'cart_item'
      }
    })
  }
}

module.exports = CartsAPI
