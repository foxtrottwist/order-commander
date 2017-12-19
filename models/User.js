const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'You must provide an email',
  },
  password: String,
  isAdmin: { type: Boolean, default: false },
})

module.exports = mongoose.model('users', UserSchema)
