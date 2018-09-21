'use strict'

const JsonWebToken = require('jsonwebtoken')

const Encode = (email,ip) => new Promise((resolve, reject) => {

  JsonWebToken.sign({
      data: { email: email, ip: ip }
    },
    `${process.env.SECURITY_TOKEN_SECRET}`,
    (err, token) => {
      if (err) reject(err)
      else resolve({ token: token })
  })
})

const Decode = (token) => new Promise((resolve, reject) => {

  JsonWebToken.verify(
    token.token,
    `${process.env.SECURITY_TOKEN_SECRET}`,
    (err, decoded) => {
      if (err) reject(err)
      else resolve(decoded)
    })
})

module.exports = {
  Token: {
    Encode: Encode,
    Decode: Decode
  }
}
