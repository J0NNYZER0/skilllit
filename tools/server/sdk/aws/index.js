'use strict'

const Bounce = require('bounce'),
  Aws = require('aws-sdk')

const Sdk = {
  Aws: {
    Test: {
      Upload: async () => {
        try {
          const s3 = new Aws.S3(),
            bucketName = 'skilllit-public',
            keyName = 'test-key',
            params = {Bucket: bucketName, Key: keyName, Body: 'Hello!'}

           s3.putObject(params, (err, data) => {

               if (err) {

                 console.log(err)

               } else {

                 console.log("Successfully uploaded data to myBucket/myKey")

               }

            })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      },
      Email: async () => {
        try {
          const ses = new Aws.SES(),
            params = {
              Destination: {
               ToAddresses: [
                  "jon.ortiz@me.com"
               ]
              },
              Message: {
               Body: {
                Html: {
                 Charset: "UTF-8",
                 Data: "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
                },
                Text: {
                 Charset: "UTF-8",
                 Data: "This is the message body in text format."
                }
               },
               Subject: {
                Charset: "UTF-8",
                Data: "Test email"
               }
              },
              Source: "login@skilllit.com",
             }

           ses.sendEmail(params, (err, data) => {

             if (err) console.log(err, err.stack) // an error occurred
             else console.log(data) // successful response

           })

        } catch(err) {

          Bounce.rethrow(err, 'system')
        }
      }
    }
  }
}

module.exports = {
	Sdk: Sdk
}
