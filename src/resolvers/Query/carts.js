module.exports = {
  async cart(
    _,
    { cartID },
    {
      dataSources: { cartsAPI }
    }
  ) {
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
  }
}
