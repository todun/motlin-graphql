module.exports = {
  async collections(
    _,
    { dir = null, limit = null, offset = null, sort = null },
    {
      dataSources: { collectionsAPI }
    }
  ) {
    const { data } = await collectionsAPI.findAll({
      dir,
      limit,
      offset,
      sort
    })

    return data
  },

  async collection(
    _,
    { id },
    {
      dataSources: { collectionsAPI }
    }
  ) {
    const { data } = await collectionsAPI.findByID(id)

    return data
  }
}
