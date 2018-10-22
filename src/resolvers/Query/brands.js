module.exports = {
  async brands(
    _,
    { dir = null, limit = null, offset = null, sort = null },
    {
      dataSources: { brandsAPI }
    }
  ) {
    const { data } = await brandsAPI.findAll({
      dir,
      limit,
      offset,
      sort
    })

    return data
  },

  async brand(
    _,
    { id },
    {
      dataSources: { brandsAPI }
    }
  ) {
    const { data } = await brandsAPI.findByID(id)

    return data
  }
}
