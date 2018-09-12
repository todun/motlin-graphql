module.exports = {
  // TODO: Add error handling
  async createStore(_, { name }, { dataSources }) {
    const {
      data: { id: noneUuid, uuid: id, ...store }
    } = await dataSources.storesAPI.createStore({ name })

    return {
      id,
      noneUuid,
      ...store
    }
  },

  // TODO: Add error handling
  async updateStore(_, { storeId, name }, { dataSources }) {
    const {
      data: { id: noneUuid, uuid: id, ...store }
    } = await dataSources.storesAPI.updateStore(storeId, { name })

    return {
      id,
      noneUuid,
      ...store
    }
  }
}
