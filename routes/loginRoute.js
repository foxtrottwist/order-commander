const router = require('express').Router()
const userToken = require('../services/token')

router.route('/').post((req, res) => {
  const token = userToken(req.user)
  const oneWeek = 60000 * 60 * 24 * 7
  res
    .cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      maxAge: oneWeek,
    })
    .end()
})

module.exports = router
