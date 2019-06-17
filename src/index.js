const { ApolloServer } = require('apollo-server-micro')
const { makeExecutableSchema } = require('graphql-tools')
const { applyMiddleware } = require('graphql-middleware')

const dataSources = require('./datasources')
const permissions = require('./permissions')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const server = new ApolloServer({
  schema: applyMiddleware(
    makeExecutableSchema({
      typeDefs,
      resolvers,
      resolverValidationOptions: {
        requireResolversForResolveType: false
      }
    }),
    permissions
  ),
  dataSources,
  context: ({ req }) => ({
    apiUrl: process.env.MOLTIN_API_URL,
    authUrl: process.env.MOLTIN_AUTH_URL,
    token: req.headers.authorization
  }),
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: '/' })
