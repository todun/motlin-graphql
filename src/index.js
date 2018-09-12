const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')
const { applyMiddleware } = require('graphql-middleware')
const { join } = require('path')

const resolvers = require('./resolvers')
const permissions = require('./permissions')
const storesAPI = require('./datasources/stores')

const typeDefs = importSchema(join(__dirname, 'schema.graphql'))

const schema = makeExecutableSchema({ typeDefs, resolvers })

const schemaWithMiddleware = applyMiddleware(schema, permissions)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  dataSources: () => ({
    storesAPI: new storesAPI()
  }),
  context: ({ req }) => ({
    apiUrl: process.env.MOLTIN_API_URL,
    authUrl: process.env.MOLTIN_API_PASSWORD_AUTH_URL,
    token:
      req.get('Authorization') &&
      req.get('Authorization').replace('Bearer ', '')
  }),
  introspection: true,
  playground: process.env.NODE_ENV !== 'production'
})

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`)
})
