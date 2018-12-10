module.exports = {
  Gateway: {
    __resolveType({ slug }, ctx, info) {
      switch (slug) {
        case 'stripe':
          return 'Stripe'

        case 'adyen':
          return 'Adyen'

        case 'braintree':
          return 'Braintree'

        case 'card_connect':
          return 'CardConnect'

        case 'manual':
          return 'Manual'

        default:
          return null
      }
    }
  },

  Product: {
    async inventory(
      { id: productID },
      args,
      {
        dataSources: { inventoriesAPI }
      }
    ) {
      const { data } = await inventoriesAPI.findByID(productID)

      return data
    }
  }
}
