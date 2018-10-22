module.exports = {
  async gateways(
    _,
    args,
    {
      dataSources: { gatewaysAPI }
    }
  ) {
    const { data } = await gatewaysAPI.findAll()

    return data
  },

  async gateway(
    _,
    { slug },
    {
      dataSources: { gatewaysAPI }
    }
  ) {
    const { data } = await gatewaysAPI.findBySlug(slug)

    return data
  }
}
