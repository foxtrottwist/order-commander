const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
})

UserSchema.plugin(passportLocalMongoose, { userField: 'email' })

module.exports = mongoose.model('users', UserSchema)
