const router = require('express').Router()
const userToken = require('../services/token')

router.route('/').post((req, res) => {
  const token = userToken(req.user)
  const fifteenMinutes = 60000 * 15
  res
    .cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      maxAge: fifteenMinutes,
    })
    .end()
})

module.exports = router
