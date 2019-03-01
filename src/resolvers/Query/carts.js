module.exports = {
  async cart(
    _,
    { cartID },
    {
      dataSources: { cartsAPI }
    }
  ) {
    try {
      const [
        {
          data: { id }
        },
        { data: items }
      ] = await Promise.all([
        cartsAPI.findByID(cartID),
        cartsAPI.getCartItems(cartID)
      ])

      return {
        id,
        items
      }
    } catch (e) {
      return e
    }
  }
}
