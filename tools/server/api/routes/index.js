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
      handler: Handlers.Lab.Hello
    },
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: Handlers.Lab.Add
    }
  ],
  Profile: [
    {
      method: 'GET',
      path: '/api/profile/home/{account_id}',
      handler: Handlers.Profile.Home.Select
    },
    {
      method: 'GET',
      path: '/api/profile/experience/{account_id}',
      handler: Handlers.Profile.Experience.Select
    },
    {
      method: 'GET',
      path: '/api/profile/project/{account_id}',
      handler: Handlers.Profile.Project.Select
    },
    {
      method: 'POST',
      path: '/api/profile/home/upsert',
      handler: Handlers.Profile.Home.Upsert
    },
    {
      method: 'POST',
      path: '/api/profile/experience/upsert',
      handler: Handlers.Profile.Experience.Upsert
    },
    {
      method: 'POST',
      path: '/api/profile/project/upsert',
      handler: Handlers.Profile.Project.Upsert
    }
  ]
}
