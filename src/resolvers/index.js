const Root = require('./Root')
const Query = require('./Query')
const Mutation = require('./Mutation')

module.exports = {
  ...Root,
  Query,
  Mutation
}
