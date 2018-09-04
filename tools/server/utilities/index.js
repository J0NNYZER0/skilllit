'use strict'

const Moment = require('moment'),
  Path = require('path'),
  Fs = require('fs')

const CreateTimestamp = () => Moment().format('YYYY-MM-DD hh:mm:ss')

const ReadFileAsync = (relativePath) => Fs.readFileSync(Path.join(__dirname, relativePath))

module.exports = {
  CreateTimestamp: CreateTimestamp,
  ReadFileAsync: ReadFileAsync
}
