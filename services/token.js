require('dotenv').config()
const jwt = require('jwt-simple')

module.exports = (user) => {
  const fifteenMinutes = 60000 * 15
  const iat = Math.round(Date.now() / 1000)
  const exp = Math.round(Date.now() / 1000) + fifteenMinutes
  return jwt.encode({ sub: user.id, iat, exp }, process.env.SECRET)
}
