module.exports = {
  async integrations(
    _,
    args,
    {
      dataSources: { integrationsAPI }
    }
  ) {
    const { data } = await integrationsAPI.findAll()

    return data
  },

  async integration(
    _,
    { id },
    {
      dataSources: { integrationsAPI }
    }
  ) {
    const { data } = await integrationsAPI.findByID(id)

    return data
  }
}
