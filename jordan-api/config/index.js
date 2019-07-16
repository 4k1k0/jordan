require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  sender: {
    mail: process.env.SENDER_MAIL,
    password: process.env.SENDER_PASSWORD
  }
}

