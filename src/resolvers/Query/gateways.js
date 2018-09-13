module.exports = {
  async gateways(_, args, { dataSources }) {
    const { data } = await dataSources.gatewaysAPI.allGateways()

    return data
  },

  async gateway(_, { slug }, { dataSources }) {
    const { data } = await dataSources.gatewaysAPI.getGateway(slug)

    return data
  }
}
