'use strict'

const Path = require('path'),
Hapi = require('hapi'),
  Server = new Hapi.Server({
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
  Inert = require('inert'),
  Utility = require('./utility'),
  FileHandler = (request, reply) => {
    reply.file(Path.join(__dirname, '../../dist/index.html'))
  },
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

Server.register([Inert], (err) => {
  if (err) throw err

	Server.route(
    [].concat(
      Routes.Base,
      Routes.Static
      .map(r => {
        r.handler = FileHandler
        return r
      })
    ).map(r => {
      r.config = { auth: false }
      return r
    })
	)
})

// Start the server
async function Start() {

    try {
        await Server.start()
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }

    console.log('Dub dub dub dot Jon Ortiz dot me is running @', Server.info.uri, 'on', Utility.CreateTimestamp())
}

Start()
