require('dotenv').config()
const jwt = require('jwt-simple')

module.exports = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET)
}
