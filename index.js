require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

require('./models/InventoryList')
const inventoryRoutes = require('./routes/inventoryRoutes')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO, {
  useMongoClient: true,
})

const app = express()

app.use(bodyParser.json())

inventoryRoutes(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// eslint-disable-next-line
app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
