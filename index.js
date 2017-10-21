const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/InventoryList')
const inventoryRoutes = require('./routes/inventoryRoutes')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())

inventoryRoutes(app)

const PORT = process.env.PORT || 5000
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
