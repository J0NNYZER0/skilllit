'use strict'

const Path = require('path'),
  Hapi = require('hapi'),
  Catbox = require('catbox'),
  Connection = {
    host: '0.0.0.0',
    port: process.env.PORT || 5000
  },
  Server = new Hapi.server({
    cache: [
      {
				name: 'account',
				engine: require('catbox-memory'),
				host: Connection.host,
				port: Connection.port,
				partition: 'account'
			}
    ],
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
  Utility = require('./utilities'),
  FileHandler = (request, h) => {

    return h.file(Path.join(__dirname, '../../dist/index.html'))
  },
  ApiRoutes = require('./api/routes'),
  Routes = {
    Base: [
      // /{files*}
      {
        method: 'GET',
        path: '/{files*}',
        handler: {
          directory: {
            path: '.',
            redirectToSlash: true,
            index: true
          }
        }
      }
    ],
    Static: [
      {
        method: 'GET',
        path: '/'
      },
      {
        method: 'GET',
        path: '/home'
      },
      {
        method: 'GET',
        path: '/experience'
      },
      {
        method: 'GET',
        path: '/skillsets'
      },
      {
        method: 'GET',
        path: '/education'
      },
      {
        method: 'GET',
        path: '/resume'
      },
      {
        method: 'GET',
        path: '/contact'
      },
      {
        method: 'GET',
        path: '/log'
      }
    ]
  }

// Start the server
const start = async () => {

  try {

    await Server.register([require('inert')])

    const add = async (a, b) => {
      console.log('add function')
      return Number(a) + Number(b)
    }

    Server.app.cache = {
      account: Server.cache({
        cache: 'account',
        expiresIn: 10 * 1000,
        segment: 'accountLogin',
        generateFunc: async (id) => {
          console.log('generateFunc')

          return await add(id.a, id.b)
        },
        generateTimeout: 2000
      })
    }

    Server.route(
      [].concat(
        Routes.Base,
        Routes.Static.map(r => {
          r.handler = FileHandler
          return r
        }),
        ApiRoutes.Account,
        ApiRoutes.Contact,
        ApiRoutes.Lab
      ).map(r => {
        r.config = { auth: false }
        return r
      })
    )

    await Server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server for skilllit is running @', Server.info.uri, 'on', Utility.CreateTimestamp())
}

start()
