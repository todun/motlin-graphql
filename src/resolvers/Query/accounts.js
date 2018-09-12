const request = require('request-promise')

module.exports = {
  // TODO: Move to a dataSource
  async me(_, args, { token, apiUrl }) {
    const { data } = await request({
      uri: `${apiUrl}/v1/accounts`,
      json: true,
      headers: {
        Authorization: token
      }
    })

    return data
  },

  // TODO: Move to a dataSource
  async keys(_, { storeId: store_id }, { token, apiUrl }) {
    const { data } = await request({
      uri: `${apiUrl}/v1/accounts/keys`,
      qs: {
        ...(store_id && { store_id })
      },
      json: true,
      headers: {
        Authorization: token
      }
    })

    return data.length ? data : [data]
  }
}
