const auth = require('./auth')
const integrations = require('./integrations')
const stores = require('./stores')

module.exports = {
  ...auth,
  ...integrations,
  ...stores
}
