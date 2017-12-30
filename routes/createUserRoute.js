const mongoose = require('mongoose')
const router = require('express').Router()

const User = mongoose.model('users')

router
  .route('/')
  .get(async (req, res) => {
    try {
      if (req.user.isAdmin) {
        // eslint-disable-next-line
        const users = await User.find({ _id: { $nin: [req.user._id] } })

        res.send(users)
      }
    } catch (error) {
      res.send(error.message)
    }
  })
  .post(async (req, res) => {
    try {
      const { email, password, isAdmin } = req.body

      const user = new User({
        email,
        password,
        isAdmin,
      })

      await user.save()
      res.send('Success!')
    } catch (error) {
      res.send(error.message)
    }
  })

module.exports = router
