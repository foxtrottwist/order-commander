const mongoose = require('mongoose')
const router = require('express').Router()

const User = mongoose.model('users')

router.route('/').post(async (req, res) => {
  const { email, password, isAdmin } = req.body

  const user = new User({
    email,
    password,
    isAdmin,
  })

  await user.save()
  res.json(user)
})

module.exports = router
