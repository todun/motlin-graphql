module.exports = {
  ORDER_CONFIRMATION_EMAIL: {
    name: 'TEMPLATE:Order confirmation email',
    description: 'Confirmation emails for your Moltin orders',
    observes: ['order.paid'],
    configuration: {
      url: `${
        process.env.MOLTIN_INTEGRATION_FUNCTIONS_URL
      }/order-confirmation-email`
    }
  },
  ORDER_SHIPPED_EMAIL: {
    name: 'TEMPLATE:Order shipped email',
    description: 'Fulfillment emails for your Moltin orders',
    observes: ['order.fulfilled'],
    configuration: {
      url: `${process.env.MOLTIN_INTEGRATION_FUNCTIONS_URL}/order-shipped-email`
    }
  }
}
