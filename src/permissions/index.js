const isAuthenticated = require('./isAuthenticated')

module.exports = {
  Query: {
    me: isAuthenticated,
    stores: isAuthenticated,
    keys: isAuthenticated
  },
  Mutation: {
    createStore: isAuthenticated,
    renameStore: isAuthenticated,
    addUserToStore: isAuthenticated
  }
}
