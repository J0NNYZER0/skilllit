'use strict'

const Token = (ip) => new Promise((resolve, reject) => {

  console.log('ip', ip)

  setTimeout(() => resolve({token: 'a random token'}), 1000)
})

module.exports = {
  Token: Token
}
