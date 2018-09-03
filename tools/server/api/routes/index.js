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
  Hello: [
    {
      method: 'GET',
      path: '/api/hello',
      handler: Handlers.Hello
    }
  ]
}
