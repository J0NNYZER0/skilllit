'use strict'

const Handlers = require('../handlers')

module.exports = {
  Account: [
    {
      method: 'GET',
      path: '/login',
      handler: Handlers.Account.Login
    }
  ],
  Contact: [
    {
      method: 'POST',
      path: '/contact/insert',
      handler: Handlers.Contact.Insert
    }
  ],
  Hello: [
    {
      method: 'GET',
      path: '/hello',
      handler: Handlers.Hello
    }
  ]
}
