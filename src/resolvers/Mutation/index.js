const auth = require('./auth')
const stores = require('./stores')

module.exports = {
  ...auth,
  ...stores
}
