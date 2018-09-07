'use strict'

const DbQuery = require('../dbs/queries'),
  Bounce = require('bounce'),
  Security = require('../../security'),
  Email = require('../../email')

module.exports = {
  Account: {
    Login: async (request, h) => {

      try {

        const ip = request.info.remoteAddress,
          payload = JSON.parse(request.payload),
          encoded = await Security.Token.Encode(payload.email, ip),
          decoded = await Security.Token.Decode(encoded),
          email = await Email.EmailProcessor(payload.email, encoded)

        await DbQuery.Mysql(
          '../api/sql/insert/login.sql',
          { ...payload, ...encoded })

        return h.response({ status: 200 })

      } catch(err) {

        Bounce.rethrow(err, 'system')
       }
    }
  },
  Contact: {
    Insert: async (request, h) => {

      try {
        await DbQuery.Mysql(
          '../api/sql/insert/contact_message.sql',
          JSON.parse(request.payload))

        return h.response({ status: 200 })

      } catch(err) {

        Bounce.rethrow(err, 'system')
      }
    }
  },
  Lab: {
    Add: async (request, h) => {

      const { a, b } = request.params,
        id = `${a}:${b}`

      return await request.server.app.cache.account.get({ id, a, b })
    },
    Hello: async (request, h) => {

      let data = null

      try {

        data = await DbQuery.Mysql(
          '../api/sql/insert/login.sql',
          11)

        return h.response({data: data})

      } catch(err) {

        Bounce.rethrow(err, 'system')
      }

      return data
    }
  },
  Profile: {
    Home: {
      Select: async (request, h) => {

        try {
          const params = request.params

          const data = await DbQuery.Mysql(
            '../api/sql/select/home.sql',
            params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Upsert: async (request, h) => {

        try {
          const payload = JSON.parse(request.payload)

          await DbQuery.Mysql(
            '../api/sql/upsert/home.sql',
            payload)

          return h.response({ status: 200 })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      }
    },
    Experience: {
      Select: async (request, h) => {

        try {
          const params = request.params

          const data = await DbQuery.Mysql(
            '../api/sql/select/experience.sql',
            params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Upsert: async (request, h) => {

        try {
          const payload = JSON.parse(request.payload)

          await DbQuery.Mysql(
            '../api/sql/upsert/experience.sql',
            payload)

          return h.response({ status: 200 })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      }
    }
  }
}
