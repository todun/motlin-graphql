module.exports = {
  async products(
    _,
    { dir = null, limit = null, offset = null, sort = null },
    {
      dataSources: { productsAPI }
    }
  ) {
    const { data } = await productsAPI.findAll({ dir, limit, offset, sort })

    return data
  },

  async product(
    _,
    { id },
    {
      dataSources: { productsAPI }
    }
  ) {
    const { data } = await productsAPI.findByID(id)

    return data
  }
}
