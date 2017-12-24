require('dotenv').config()
const jwt = require('jwt-simple')

module.exports = (user) => {
  const iat = Math.round(Date.now() / 1000)
  const exp = Math.round(Date.now() / 1000) + 30 // 30 seconds
  return jwt.encode({ sub: user.id, iat, exp }, process.env.SECRET)
}
