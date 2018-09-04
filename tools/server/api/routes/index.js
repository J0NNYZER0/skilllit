'use strict'

const Handlers = require('../handlers')

module.exports = {
  Account: [
    {
      method: 'POST',
      path: '/api/account/login',
      handler: Handlers.Account.Login
    }
  ],
  Contact: [
    {
      method: 'POST',
      path: '/api/contact/insert',
      handler: Handlers.Contact.Insert
    }
  ],
  Lab: [
    {
      method: 'GET',
      path: '/hello',
      handler: Handlers.Hello
    },
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: async (request, h) => {

        const { a, b } = request.params,
          id = `${a}:${b}`

        return await request.server.app.cache.account.get({ id, a, b })
      }
    }
  ]
}
