'use strict'
const Moment = require('moment')

const CreateTimestamp = () => Moment().format('YYYY-MM-DD hh:mm:ss')

module.exports = {
  CreateTimestamp: CreateTimestamp
}
