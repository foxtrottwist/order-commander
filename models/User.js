const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'You must provide an email',
  },
  password: { type: String, required: 'You must provide a password' },
  isAdmin: { type: Boolean, default: false },
})

// eslint-disable-next-line
UserSchema.pre('save', function(next) {
  const salt = 10
  bcrypt
    .hash(this.password, salt)
    .then((hash) => {
      this.password = hash
      next()
    })
    .catch(error => next(error))
})

// eslint-disable-next-line
UserSchema.methods.comparePassword = function(providedPasword, callback) {
  bcrypt
    .compare(providedPasword, this.password)
    .then(isMatch => callback(null, isMatch))
    .catch(error => callback(error))
}

module.exports = mongoose.model('users', UserSchema)
