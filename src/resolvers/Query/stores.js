module.exports = {
  async stores(_, args, { dataSources }) {
    const { data } = await dataSources.storesAPI.getStores()

    return data.map(({ id: noneUuid, uuid: id, name }) => ({
      id,
      noneUuid,
      name
    }))
  },

  async store(_, { id: storeId }, { dataSources }) {
    const {
      data: { id: noneUuid, uuid: id, ...store }
    } = await dataSources.storesAPI.getStore(storeId)

    return {
      id,
      noneUuid,
      ...store
    }
  }
}
