'use strict'

const Bounce = require('bounce'),
  Fs = require('fs'),
	Path = require('path'),
	Nodemailer = require('nodemailer'),
  Aws = require('aws-sdk')

const Transporter = () => Nodemailer.createTransport({
	service: process.env.SMTP_SERVICE,
	auth: {
			user: process.env.SMTP_AUTH_USER,
			pass: process.env.SMTP_AUTH_PASS
	}
})

const AwsTransporter = () => Nodemailer.createTransport({
  SES: new Aws.SES({
      apiVersion: '2010-12-01'
  })
})

const ParseEmail = (email,token) => new Promise ((resolve) => {
	let parsed = Fs.readFileSync(
    Path.join(
      __dirname, './login/index.html'), 'utf8')

	parsed = parsed.replace(/%%TOKEN%%/, token)

	resolve(parsed)
})

const MailOptions = (email, token, parsedEmail) => new Promise(resolve => resolve({
	from: '"Skilllit" <hello@skilllit.com>', // sender address
	to: email, // list of receivers
	subject: 'Log In to Skilllit', // Subject line
	text: 'Copy and paste this link - http://www.skilllit.com/account/' + token + ' . It can only be used once. It expires in 10 minutes.', // plain text body
	html: parsedEmail
}))

const SesMailOptions = (email, token, parsedEmail) => new Promise(resolve => resolve({
  from: 'hello@skilllit.com',
  to: 'jon.ortiz@me.com',
  subject: 'Message',
  text: 'I hope this message gets sent!',
  ses: { // optional extra arguments for SendRawEmail
    Tags: [{
      Name: 'tag name',
      Value: 'tag value'
    }]
  }
}))

const SendEmail = (mailOptions) => new Promise((resolve, reject) => {

  Transporter().verify((error, success) => {
     if (error) {
      console.log(error)
     } else {
      console.log('Server is ready to take our messages')
     }
  })

  Transporter().sendMail(mailOptions, (error, info) => {
    if (error) {
      reject(error)
    }
    resolve('Message sent: %s', info.messageId)
  })
})

const SendAwsEmail = (mailOptions) => new Promise((resolve, reject) => {
  AwsTransporter().sendMail(mailOptions, (error, info) => {
    if (error) {
      reject(error)
    }
    console.log('info', info)
    resolve('Message sent: %s', info.messageId)
  })
})

const EmailProcessor = async (email, token) => {
  try {
    const parsedEmail = await ParseEmail(email, token),
      mailOptions = await SesMailOptions(email, token, parsedEmail),
      sentEmail = await SendAwsEmail(mailOptions)

    return sentEmail
  } catch(err) {

    Bounce.rethrow(err, 'system')
  }
}

module.exports = {
	EmailProcessor: EmailProcessor
}
