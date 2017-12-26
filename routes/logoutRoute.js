const router = require('express').Router()

router.route('/').get((req, res) => {
  res.clearCookie('access_token').redirect('/')
})

module.exports = router
