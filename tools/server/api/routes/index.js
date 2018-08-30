'use strict'

const Handlers = require('../handlers')

module.exports = {
  Account: [
    {
      method: 'GET',
      path: '/api/login',
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
  Hello: [
    {
      method: 'GET',
      path: '/api/hello',
      handler: Handlers.Hello
    }
  ]
}
