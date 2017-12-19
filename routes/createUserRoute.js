const mongoose = require('mongoose')
const router = require('express').Router()

const User = mongoose.model('users')

router.route('/').post(async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body
    User.findOne({ email }).then((userExist) => {
      if (userExist) {
        res
          .status(422)
          .send({ error: 'Email already in use' })
          .catch(error => res.send(error))
      }
    })
    const user = new User({
      email,
      password,
      isAdmin,
    })

    await user.save()
    res.json({ sucess: true })
  } catch (error) {
    res.status(422).send(error.message)
  }
})

module.exports = router
