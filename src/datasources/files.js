const DataLoader = require('dataloader')

const V2API = require('./v2')

class FilesAPI extends V2API {
  constructor() {
    super()
    this.resource = 'files'

    this.filesLoader = new DataLoader(async imageIDs => {
      return imageIDs.map(async id => {
        return this.get(`${this.resource}/${id}`)
      })
    })
  }

  async findByID(id) {
    return this.filesLoader.load(id)
  }
}

module.exports = FilesAPI
