'use strict'

const Path = require('path'),
  Hapi = require('hapi'),
  Server = new Hapi.server({
      host: '0.0.0.0',
      port: process.env.PORT || 5000,
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
        path: '/signin'
      }
    ]
  }

// Start the server
const start = async () => {

    try {
        await Server.register(require('inert'))

        Server.route(
          [].concat(
            Routes.Base,
            Routes.Static.map(r => {
              r.handler = FileHandler
              return r
            }),
            ApiRoutes.Account,
            ApiRoutes.Contact,
            ApiRoutes.Hello
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
