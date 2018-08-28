'use strict'

const Hapi = require('hapi'),
  Server = new Hapi.Server(),
  Path = require('path'),
  Inert = require('inert'),
  CreateDate = () => {
    let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth(),
    day = today.getDate(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds(),
    date = new Date(Date.UTC(year, month, day, hour, minute, second)).toString()

    return date
  },
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
      }
    ]
  }

Server.connection({
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
})

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

Server.start((err) => {
    if (err) throw err

    console.log('Dub dub dub dot Jon Ortiz dot me is running @', Server.info.uri, 'on', CreateDate())

})
