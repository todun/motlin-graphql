module.exports = {
  async categories(
    _,
    { dir = null, limit = null, offset = null, sort = null },
    {
      dataSources: { categoriesAPI }
    }
  ) {
    const { data } = await categoriesAPI.findAll({
      dir,
      limit,
      offset,
      sort
    })

    return data
  },

  async category(
    _,
    { id },
    {
      dataSources: { categoriesAPI }
    }
  ) {
    const { data } = await categoriesAPI.findByID(id)

    return data
  }
}
