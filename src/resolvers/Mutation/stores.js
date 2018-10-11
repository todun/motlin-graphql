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
  async renameStore(_, { id: storeId, newName: name }, { dataSources }) {
    const {
      data: { id: noneUuid, uuid: id, ...store }
    } = await dataSources.storesAPI.updateStore(storeId, { name })

    return {
      id,
      noneUuid,
      ...store
    }
  },

  // TODO: Add error handling
  async switchStore(_, { id }, { dataSources }) {
    const {
      data: { status, title: message }
    } = await dataSources.storesAPI.switchStore(id)

    return {
      success: status === 200,
      message
    }
  },

  async addUserToStore(
    _,
    { id, name, email, role: roleEnum = 'USER' },
    { dataSources }
  ) {
    const role = roleEnum === 'USER' ? 1 : 2

    const {
      status: success,
      data: message
    } = await dataSources.storesAPI.addUser(id, {
      name,
      email,
      role
    })

    return {
      success,
      message
    }
  }
}
