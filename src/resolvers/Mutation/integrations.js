const templatePayloads = require('../../utils/integration-template-payloads')

module.exports = {
  async enableIntegrationFromTemplate(
    _,
    { type },
    {
      dataSources: { integrationsAPI }
    }
  ) {
    const { data } = await integrationsAPI.createIntegration({
      enabled: true,
      integration_type: 'webhook',
      type: 'integration',
      ...templatePayloads[type]
    })

    return data
  }
}
