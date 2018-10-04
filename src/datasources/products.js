const V2API = require('./v2')

class ProductsAPI extends V2API {
  async allProducts({ dir, limit, offset, sort }) {
    const sortString = dir === 'asc' ? sort : `-${sort}`

    return this.get('products', [
      ['page[limit]', limit],
      ['page[offset]', offset],
      ['sort', sortString]
    ])
  }

  async getProduct(id) {
    return this.get(`products/${id}`)
  }
}

module.exports = ProductsAPI
