'use strict'

const Path = require('path'),
  Hapi = require('hapi'),
  Inert = require('inert'),
  HapiAutCookie = require('hapi-auth-cookie'),
  Utility = require('./utilities'),
  ApiRoutes = require('./api/routes'),
  Connection = {
    host: '0.0.0.0',
    port: process.env.PORT || 5000
  },
  Server = new Hapi.server({
    host: Connection.host,
    port: Connection.port,
    state: { ignoreErrors: true },
    routes: {
      files: { relativeTo: Path.join(__dirname, '../../dist') },
        cors: {
          origin: ['*'],
          exposedHeaders: ['Authorization']
        }
    }
  }),
  FileHandler = (request, h) => {
    return h.file(Path.join(__dirname, '../../dist/index.html'))
  }

// Start the server
const start = async () => {

  try {

    await Server.register([Inert, HapiAutCookie])

    const cache = Server.cache({
      segment: 'sessions',
      expiresIn: 3 * 24 * 60 * 60 * 1000
    })

    Server.app.cache = cache

    Server.auth.strategy('session', 'cookie', {
      password: 'password-should-be-32-characters',
      cookie: 'sid-example',
      redirectTo: '/login',
      isSecure: false,
      isHttpOnly: true,
      validateFunc: async (request, session) => {
        const cached = await cache.get(session.sid),
          out = { valid: !!cached }

        if (out.valid) {
            out.credentials = cached.account
        }

        console.log('out', out)

        return out;
      }
    })

    Server.auth.default('session')

    Server.route(
      [].concat(
        ApiRoutes.Account,
        ApiRoutes.Base,
        ApiRoutes.Contact,
        ApiRoutes.Dev,
        ApiRoutes.Lab,
        ApiRoutes.Profile,
        ApiRoutes.Sdk,
        ApiRoutes.Static.map(r => {
          r.handler = FileHandler
          return r
        })
      )
    )

    const preResponse = (request, h) => {

      const response = request.response

      if (!response.isBoom) {
          return h.continue
      }

      const statusCode = response.output.statusCode
      console.log('statusCode', statusCode)
      switch(statusCode) {
        case 404:
        return h.redirect('/error')

        case 403:
        return h.redirect('/unauthorized')

        default:
        return h.continue
      }
    }

    Server.ext('onPreResponse', preResponse)

    await Server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server for skilllit is running @', Server.info.uri, 'on', Utility.CreateTimestamp())
}

start()
