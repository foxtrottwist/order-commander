require('dotenv').config()
const router = require('express').Router()
const userToken = require('../services/token')

router.route('/').post((req, res) => {
  const token = userToken(req.user)

  res
    .cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 60000 * 15,
    })
    .end()
})

module.exports = router
