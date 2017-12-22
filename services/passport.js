require('dotenv').config()
const passport = require('passport')
const mongoose = require('mongoose')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local')

const User = mongoose.model('users')

const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (error, user) => {
    if (error) {
      return done(error)
    }
    if (!user) {
      return done(null, false)
    } // eslint-disable-next-line
    return user.comparePassword(password, (error, isMatch) => {
      if (error) {
        return done(error)
      }
      if (!isMatch) {
        return done(null, false)
      }

      return done(null, user)
    })
  })
})

const fromCookie = (req) => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies.access_token
  }
  return token
}
// jwtFromRequest Tell the strategy where to look for the token
// secretOrKey Tell the strategy how to decode the payload
const jwtOptions = {
  jwtFromRequest: fromCookie,
  secretOrKey: process.env.SECRET,
}

const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
  // If error we call done with the error object, false means we did not find a user
  // Done is a callback that is a part of passport
  User.findOne({ _id: payload.sub })
    .then(user => done(null, user))
    .catch(error => done(error, false))
})

passport.use(jwtAuth)
passport.use(localLogin)
