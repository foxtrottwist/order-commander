const mongoose = require('mongoose')

const { Schema } = mongoose

const inventoryListSchema = new Schema({
  listTitle: String,
  category: String,
  sortOrder: Number,
  inventoryItem: String,
  count: { type: Number, default: 0 },
})

mongoose.model('inventoryList', inventoryListSchema)
