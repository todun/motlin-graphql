const auth = require('./auth')
const carts = require('./carts')
const integrations = require('./integrations')
const stores = require('./stores')

module.exports = {
  ...auth,
  ...carts,
  ...integrations,
  ...stores
}
