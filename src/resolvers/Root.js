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
  }
}
