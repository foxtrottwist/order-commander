const router = require('express').Router()
const userToken = require('../services/token')
const Cookies = require('cookies')

router.route('/').post((req, res) => {
  const token = userToken(req.user)
  const cookies = new Cookies(req, res)

  cookies.set('access_token', token, {
    httpOnly: true,
    secure: true,
  })
})

module.exports = router
