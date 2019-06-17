const { AuthenticationError } = require('apollo-server-micro')

module.exports = async (resolve, parent, args, ctx, info) => {
  if (!ctx.token) {
    throw new AuthenticationError(`You must be logged in to do that`)
  }

  return resolve()
}
