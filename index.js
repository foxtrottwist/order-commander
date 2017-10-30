require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('./models/InventoryList')
const inventoryRoutes = require('./routes/inventoryRoutes')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

const app = express()

app.use(bodyParser.json())

inventoryRoutes(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
