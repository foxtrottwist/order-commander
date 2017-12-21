const router = require('express').Router()
const userToken = require('../services/token')

router.route('/').post((req, res) => {
  res.send({ token: userToken(req.user) })
})

module.exports = router
