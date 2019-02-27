const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')
const { applyMiddleware } = require('graphql-middleware')
const { join } = require('path')

const resolvers = require('./resolvers')
const permissions = require('./permissions')

const dataSources = require('./datasources')

const typeDefs = importSchema(join(__dirname, 'schema.graphql'))

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
})

const schemaWithMiddleware = applyMiddleware(schema, permissions)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  dataSources,
  context: ({ req }) => ({
    apiUrl: process.env.MOLTIN_API_URL,
    authUrl: process.env.MOLTIN_API_PASSWORD_AUTH_URL,
    token:
      req.get('Authorization') &&
      req.get('Authorization').replace('Bearer ', '')
  }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  },
  introspection: true,
  // introspection: process.env.NODE_ENV !== 'production',
  playground: true
})

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`)
})
