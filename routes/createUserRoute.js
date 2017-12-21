const mongoose = require('mongoose')
const router = require('express').Router()
const tokenForUser = require('../services/token')

const User = mongoose.model('users')

router.route('/').post(async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body

    const user = new User({
      email,
      password,
      isAdmin,
    })

    await user.save()
    res.json({ token: tokenForUser(user) })
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = router
