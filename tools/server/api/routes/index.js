'use strict'

const Handlers = require('../handlers')

module.exports = {
  Account: [
    {
      method: 'GET',
      path: '/v1/login',
      handler: Handlers.Account.Login
    }
  ],
  Contact: [
    {
      method: 'POST',
      path: '/v1/contact/insert',
      handler: Handlers.Contact.Insert
    }
  ],
  Hello: [
    {
      method: 'GET',
      path: '/v1/hello',
      handler: Handlers.Hello
    }
  ]
}
