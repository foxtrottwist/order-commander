const express = require('express')
const inventoryRoutes = require('./routes/inventoryRoutes')

const app = express()

inventoryRoutes(app)

const PORT = process.env.PORT || 5000
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
