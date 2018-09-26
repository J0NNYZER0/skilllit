'use strict'

const Bounce = require('bounce'),
  Fs = require('fs'),
	Path = require('path'),
  Aws = require('aws-sdk')

const ParseEmail = (email,shortId) => new Promise ((resolve) => {

  let parsed = Fs.readFileSync(Path.join(__dirname, './login/index.html'), 'utf8')

	parsed = parsed.replace(/%%TOKEN%%/, shortId)

	resolve(parsed)
})

const SesMailOptions = (email, shortId, parsedEmail) => new Promise(resolve => resolve({
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
     Data: 'Copy and paste this link - http://www.skilllit.com/login/' + shortId + ' . It can only be used once. It expires in 10 minutes.'
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

const EmailProcessor = async (email, shortId) => {
  try {
    const parsedEmail = await ParseEmail(email, shortId),
      mailOptions = await SesMailOptions(email, shortId, parsedEmail),
      sentEmail = await SendEmail(mailOptions)

    return sentEmail

  } catch(err) {

    Bounce.rethrow(err, 'system')
  }
}

module.exports = {
	EmailProcessor: EmailProcessor
}
