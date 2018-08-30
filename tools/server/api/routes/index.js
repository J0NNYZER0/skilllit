'use strict'

module.exports = {
  Account: [
    {
      method: 'GET',
      path: '/login',
      handler: (request, h) => {

        return h.response('Not yet implemented')
      }
    }
  ],
  Contact: [
    {
      method: 'POST',
      path: '/contact/insert',
      handler: (request, h) => {

        console.log('payloadx', request.payload)

        return h.response('Not yet implemented')
      }
    }
  ],
  Test: [
    {
      method: 'GET',
      path: '/hello',
      handler: (request, h) => {

        return h.response('Hello')
      }
    }
  ]
}
