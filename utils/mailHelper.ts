const nodemailer = require('nodemailer');
const fs = require('fs');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
//   port: 25,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


export const verifyEmail = (data: any) => {

  try {

    return new Promise((resolve, reject) => {

      fs.readFile(__dirname + '/../templates/verifyEmail.html', 'utf-8', async (error: any, html: any) => {

        if (error) reject(error)

        html = html.replace("@@URL@@", data.url)

        let mail = {
          from: process.env.EMAIL,
          to: data.email,
          subject: 'Verify your email',
          html: html,
        }

        let response = await transporter.sendMail(mail);
        resolve(response)

      })
    })

  } catch (error) {
    throw error
  }

}
