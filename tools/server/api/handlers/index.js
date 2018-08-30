'use strict'

const DbQuery = require('../dbs/queries'),
  Bounce = require('bounce')

module.exports = {
  Account: {
    Login: async (request, h) => {

      return h.response('Not yet implemented')
    }
  },
  Contact: {
    Insert: async (request, h) => {

      console.log('Handler - Contact Insert')

      try {
        await DbQuery.Mysql(
          '../api/sql/insert_contact_message.sql',
          request.payload)

        return h.response({status: 200})

      } catch(err) {

        Bounce.rethrow(err, 'system')
      }
    }
  },
  Hello: async (request, h) => {

    console.log('Handler - Hello')

    let data = null

    try {

      data = await DbQuery.Mysql(
        '../api/sql/select_login.sql',
        11)

      return h.response({data: data})

    } catch(err) {

      Bounce.rethrow(err, 'system')
    }

    return data
  }
}
