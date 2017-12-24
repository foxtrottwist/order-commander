require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const path = require('path')

require('./models/User')
require('./models/InventoryList')
require('./services/passport')
const loginRoute = require('./routes/loginRoute')
const createUserRoute = require('./routes/createUserRoute')
const inventoryRoute = require('./routes/inventoryRoute')

const requireLogin = passport.authenticate('local', { session: false })
const requireAuthentication = passport.authenticate('jwt', { session: false })

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO, {
  useMongoClient: true,
})

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/login', requireLogin, loginRoute)
app.use('/api/create_user', requireAuthentication, createUserRoute)
app.use('/api/inventory_lists', requireAuthentication, inventoryRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// eslint-disable-next-line
app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
