const V2API = require('./v2')

class CatalogueAPI extends V2API {
  async findAll({ dir, limit, offset, sort }) {
    const sortString = dir === 'asc' ? sort : `-${sort}`

    return this.get(`${this.resource}`, [
      ['page[limit]', limit],
      ['page[offset]', offset],
      ['sort', sortString]
    ])
  }
}

module.exports = CatalogueAPI
