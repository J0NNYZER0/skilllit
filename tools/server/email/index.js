'use strict'

const Bounce = require('bounce'),
  Fs = require('fs'),
	Path = require('path'),
  Aws = require('aws-sdk')

const ParseEmail = (email,token) => new Promise ((resolve) => {
	let parsed = Fs.readFileSync(Path.join(__dirname, './login/index.html'), 'utf8'),
    encodedToken = encodeURIComponent(token.token)

  console.log('encodedToken',encodedToken)
	 parsed = parsed.replace(/%%TOKEN%%/, encodedToken)

	resolve(parsed)
})

const SesMailOptions = (email, token, parsedEmail) => new Promise(resolve => resolve({
  Destination: {
   ToAddresses: [
      email
   ]
  },
  Message: {
   Body: {
    Html: {
     Charset: "UTF-8",
     Data: parsedEmail
    },
    Text: {
     Charset: "UTF-8",
     Data: 'Copy and paste this link - http://www.skilllit.com/login/' + token + ' . It can only be used once. It expires in 10 minutes.'
    }
   },
   Subject: {
    Charset: "UTF-8",
    Data: "Login to Skilllit"
   }
  },
  Source: process.env.LOGIN_EMAIL,
 }))

const SendEmail = (mailOptions) => new Promise((resolve, reject) => {
  const Ses = new Aws.SES()
  Ses.sendEmail(mailOptions, (err, data) => {
    if (err) reject(err, err.stack) // an error occurred
    else resolve(data) // successful response
  })
})

const EmailProcessor = async (email, token) => {
  try {

    const parsedEmail = await ParseEmail(email, token),
      mailOptions = await SesMailOptions(email, token, parsedEmail),
      sentEmail = await SendEmail(mailOptions)

    return sentEmail

  } catch(err) {

    Bounce.rethrow(err, 'system')
  }
}

module.exports = {
	EmailProcessor: EmailProcessor
}
