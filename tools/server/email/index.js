'use strict'

const Fs = require('fs'),
	Path = require('path'),
	Nodemailer = require('nodemailer')

const Transporter = () => Nodemailer.createTransport({
	service: process.env.SMTP_SERVICE,
	auth: {
			user: process.env.SMTP_UN,
			pass: process.env.SMTP_PW
	}
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

const SendEmail = (mailOptions) => new Promise((resolve, reject) => {
  Nodemailer.createTestAccount((err, account) => {

    if (err) reject(err)

    Transporter().sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      }
      resolve('Message sent: %s', info.messageId)
    })
  })
})

const EmailProcessor = async (email, token) => {
  const parsedEmail = await ParseEmail(email, token),
    mailOptions = await MailOptions(email, token, parsedEmail),
    sentEmail = await SendEmail(mailOptions)

    return sentEmail
}

module.exports = {
	EmailProcessor: EmailProcessor
}
