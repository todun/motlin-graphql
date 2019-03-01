module.exports = {
  async addProductToCart(
    _,
    { cartID, productID, quantity = 1 },
    {
      dataSources: { cartsAPI }
    }
  ) {
    try {
      await cartsAPI.addProductToCart(cartID, {
        productID,
        quantity
      })

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
