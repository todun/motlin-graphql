module.exports = {
  async products(
    _,
    { dir = null, limit = null, offset = null, sort = null },
    {
      dataSources: { productsAPI }
    }
  ) {
    const { data } = await productsAPI.allProducts({ dir, limit, offset, sort })

    return data
  },

  async product(
    _,
    { id },
    {
      dataSources: { productsAPI }
    }
  ) {
    const { data } = await productsAPI.getProduct(id)

    return data
  }
}
