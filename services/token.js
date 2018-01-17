require('dotenv').config()
const jwt = require('jwt-simple')

module.exports = (user) => {
  const oneWeek = 60000 * 60 * 24 * 7
  const iat = Math.round(Date.now() / 1000)
  const exp = Math.round(Date.now() / 1000) + oneWeek
  return jwt.encode({ sub: user.id, iat, exp }, process.env.SECRET)
}
