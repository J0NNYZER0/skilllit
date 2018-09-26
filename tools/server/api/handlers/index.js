'use strict'

const DbQuery = require('../dbs/queries'),
  Bounce = require('bounce'),
  Transform = require('../transforms'),
  Security = require('../../security'),
  ShortId = require('shortid'),
  Email = require('../../email'),
  AwsSdk = require('../../sdk/aws').Sdk.Aws

  let uuid = 1     // Use seq instead of proper unique identifiers for demo only

  const users = {
      'hello@ludwigui.com': {
          id: 'john',
          password: 'password',
          name: 'John Doe',
          scope: ['me']
      }
  }

module.exports = {
  Account: {
    Login: async (request, h) => {
      let message = '',
        account = null,
        accountId = null,
        login = null,
        token = null

      if (request.method === 'post') {
        const payload = JSON.parse(request.payload),
          ip = request.info.remoteAddress

        if (request.auth.isAuthenticated) {

          return h.redirect('/')
        }

        if (!payload.email) {

          message = 'Missing email'
        } else {

          account = await DbQuery.Mysql('../api/sql/select/account.sql', payload)

          if (account.length === 0) {
            console.log('test')

            // If account does not exist
            // Create account

            account = await DbQuery.Mysql('../api/sql/insert/account.sql', payload)
            // Set account id, just inserted
            accountId = account.insertId
          } else {

            // If account exists

            // Set account id
            accountId = account.id
          }

          login = await DbQuery.Mysql('../api/sql/select/login.sql', accountId)
        }

        const shortId = ShortId.generate()

          if (login.length === 0) {

            token = await Security.Token.Encode(payload.email, ip)
            login = await DbQuery.Mysql('../api/sql/insert/login.sql',
              { short_id: shortId, ...token, account_id: accountId })
          }


        // Generate an email
        const email = await Email.EmailProcessor(payload.email, shortId)

        console.log('test', shortId)

        const sid = shortId // const sid = String(+uuid)

        await request.server.app.cache.set(sid, token, 0)

        request.cookieAuth.set({ sid })

        return h.response({ status: 200, data: { sid: sid } })
      }

      if (request.method === 'get') {

        await request.server.app.cache.get(request.params.shortId)
      }
    },
    Logout: async (request, h) => {
      request.server.app.cache.drop(request.state['sid-example'].sid)
      request.cookieAuth.clear()
      return h.response({ status: 200, data: 'logged out' })
    },
    OldLogin: async (request, h) => {

      try {
        const ip = request.info.remoteAddress,
          shortId = ShortId.generate(),
          payload = JSON.parse(request.payload),
          encoded = await Security.Token.Encode(payload.email, ip),
          decoded = await Security.Token.Decode(encoded),
          email = await Email.EmailProcessor(payload.email, shortId)

        let account = await DbQuery.Mysql('../api/sql/select/account.sql', payload)

          if (account.length === 0) {
            account = await DbQuery.Mysql('../api/sql/insert/account.sql', { ...payload })
            account = await DbQuery.Mysql('../api/sql/select/account_by_id.sql', account.insertId)
          }

        await DbQuery.Mysql(
          '../api/sql/insert/login.sql',
          { short_id: shortId, ...payload, ...encoded, account_id: account[0].id })

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

      try {

        return h.response({hello: 'world'})

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
          const params = request.params,
            data = await DbQuery.Mysql(
              '../api/sql/select/experience.sql',
              params),
            transformed = await Transform.Experience(data)

          return h.response({ status: 200, data: transformed })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Upsert: async (request, h) => {

        try {
          const payload = JSON.parse(request.payload)

          const data = await DbQuery.Mysql(
            '../api/sql/upsert/experience.sql',
            payload)

          return h.response({ status: 200, data: { id: data.insertId } })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Delete: async (request, h) => {

        try {
          const params = request.params,
            data = await DbQuery.Mysql(
              '../api/sql/delete/experience.sql',
              params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      }
    },
    Project: {
      Select: async (request, h) => {

        try {
          const params = request.params,
            data = await DbQuery.Mysql(
              '../api/sql/select/project.sql',
              params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Upsert: async (request, h) => {

        try {
          const payload = JSON.parse(request.payload)

          const data = await DbQuery.Mysql(
            '../api/sql/upsert/project.sql',
            payload)

          return h.response({ status: 200, data: { id: data.insertId } })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Delete: async (request, h) => {

        try {
          const params = request.params,
            data = await DbQuery.Mysql(
              '../api/sql/delete/project.sql',
              params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      }
    },
    Skill: {
      Select: async (request, h) => {

        try {
          const params = request.params,
            data = await DbQuery.Mysql(
              '../api/sql/select/skill.sql',
              params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Upsert: async (request, h) => {

        try {
          const payload = JSON.parse(request.payload)

          const data = await DbQuery.Mysql(
            '../api/sql/upsert/skill.sql',
            payload)

          return h.response({ status: 200, data: { id: data.insertId } })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Delete: async (request, h) => {

        try {
          const params = request.params,
            data = await DbQuery.Mysql(
              '../api/sql/delete/skill.sql',
              params)

          return h.response({ status: 200, data: data })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      }
    }
  },
  Sdk: {
    Aws: {
      Test: {
        Upload: async (request, h) => {

          try {
            const data = await AwsSdk.Test.Upload()

            return h.response({ status: 200, data: data })

          } catch(err) {

            Bounce.rethrow(err, 'system')
          }
        },
        Email: async (request, h) => {

          try {
            const data = await AwsSdk.Test.Email()

            return h.response({ status: 200, data: data })

          } catch(err) {

            Bounce.rethrow(err, 'system')
          }
        }
      }
    }
  }
}
