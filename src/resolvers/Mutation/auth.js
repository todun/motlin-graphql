const request = require('request-promise')
const { ApolloError } = require('apollo-server')

module.exports = {
  // TODO: Add error handling
  async register(_, args, { apiUrl, authUrl }) {
    const user = await request.post({
      uri: `${apiUrl}/v1/accounts/users`,
      body: args,
      json: true
    })

    const data = await request.post({
      uri: authUrl,
      form: {
        username: args.email,
        password: args.password,
        grant_type: 'password'
      },
      json: true
    })

    return { ...data, user }
  },

  // TODO: Add error handling
  async login(_, { email, password }, { authUrl, apiUrl }) {
    const data = await request.post({
      uri: authUrl,
      form: {
        username: email,
        password,
        grant_type: 'password'
      },
      json: true
    })

    const { data: user } = await request({
      uri: `${apiUrl}/v1/accounts`,
      json: true,
      headers: {
        Authorization: data.access_token
      }
    })

    return { ...data, user }
  },

  // TODO: Add error handling
  async createToken(
    _,
    { client_id, client_secret, grant_type = 'implicit' },
    { apiUrl }
  ) {
    const isClientCredentials = grant_type === 'client_credentials'

    if (isClientCredentials && !client_secret) {
      throw new ApolloError(
        'You must provide client_secret when authenticating with client_credentials'
      )
    }

    const data = await request.post({
      uri: `${apiUrl}/oauth/token`,
      form: {
        grant_type,
        client_id,
        ...(isClientCredentials && { client_secret })
      },
      json: true
    })

    return data
  },

  // TODO: Add error handling
  async refreshToken(_, { token: refresh_token }, { authUrl, apiUrl }) {
    const data = await request.post({
      uri: authUrl,
      form: {
        grant_type: 'refresh_token',
        refresh_token
      },
      json: true
    })

    const { data: user } = await request({
      uri: `${apiUrl}/v1/accounts`,
      json: true,
      headers: {
        Authorization: data.access_token
      }
    })

    return { ...data, user }
  }
}
