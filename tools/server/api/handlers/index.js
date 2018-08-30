'use strict'

const DbConnections = require('../dbs/connections')

module.exports = {
  Account: {
    Login: (request, h) => {

      return h.response('Not yet implemented')
    }
  },
  Contact: {
    Insert: (request, h) => {

      console.log('payloadx', request.payload)

      return h.response('Not yet implemented')
    }
  },
  Hello: (request, h) => {

    return h.response('hello')
  }
}
