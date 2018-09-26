'use strict'

const Handlers = require('../handlers')

module.exports = {
  Account: [
    {
      method: ['GET','POST'],
      path: '/api/account/login/{shortId?}',
      handler: Handlers.Account.Login,
      options: {
        cors: {
          origin: ['*'],
          credentials: true
        },
        auth: { mode: 'try' },
        plugins: {
          'hapi-auth-cookie': {
            redirectTo: false
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/api/account/logout',
      handler: Handlers.Account.Logout,
      options: {
        cors: {
          origin: ['*'],
          credentials: true
        },
        auth: { mode: 'try' }
      }
    }
  ],
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
      },
      options: {
        auth: false
      }
    }
  ],
  Contact: [
    {
      method: 'POST',
      path: '/api/contact/insert',
      handler: Handlers.Contact.Insert,
      options: {
        auth: false
      }
    }
  ],
  Dev: [
    {
      method: 'GET',
      path: '/dev/cache/{sid}',
      handler: async (request, h) => {
        const cache = await request.server.app.cache.get(request.params.sid)
        return h.response({ status: 200, cache })
      },
      options: {
        auth: false
      }
    }
  ],
  Lab: [
    {
      method: 'GET',
      path: '/hello',
      handler: Handlers.Lab.Hello,
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: Handlers.Lab.Add,
      options: {
        auth: false
      }
    }
  ],
  Profile: [
    {
      method: 'GET',
      path: '/api/profile/home/{account_id}',
      handler: Handlers.Profile.Home.Select,
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/api/profile/experience/{account_id}',
      handler: Handlers.Profile.Experience.Select,
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/api/profile/project/{account_id}',
      handler: Handlers.Profile.Project.Select,
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/api/profile/skill/{account_id}',
      handler: Handlers.Profile.Skill.Select,
      options: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/api/profile/home/upsert',
      handler: Handlers.Profile.Home.Upsert,
      options: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/api/profile/experience/upsert',
      handler: Handlers.Profile.Experience.Upsert,
      options: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/api/profile/project/upsert',
      handler: Handlers.Profile.Project.Upsert,
      options: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/api/profile/skill/upsert',
      handler: Handlers.Profile.Skill.Upsert,
      options: {
        auth: false
      }
    },
    {
      method: 'DELETE',
      path: '/api/profile/experience/delete/{id}',
      handler: Handlers.Profile.Experience.Delete,
      options: {
        auth: false
      }
    },
    {
      method: 'DELETE',
      path: '/api/profile/project/delete/{id}',
      handler: Handlers.Profile.Project.Delete,
      options: {
        auth: false
      }
    },
    {
      method: 'DELETE',
      path: '/api/profile/skill/delete/{id}',
      handler: Handlers.Profile.Skill.Delete,
      options: {
        auth: false
      }
    }
  ],
  Sdk: [
    {
      method: 'GET',
      path: '/api/sdk/aws/test/upload',
      handler: Handlers.Sdk.Aws.Test.Upload,
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/api/sdk/aws/test/email',
      handler: Handlers.Sdk.Aws.Test.Email,
      options: {
        auth: false
      }
    }
  ],
  Static: [
    {
      method: 'GET',
      path: '/',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/error',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/unauthorized',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/home',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/experience',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/skillsets',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/education',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/resume',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/contact',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/login/{shortId?}',
      options: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/me',
      options: {
        auth: {
          strategies: ['session'],
          access: {
            scope: ['me']
          }
        }
      }
    }
  ]
}
