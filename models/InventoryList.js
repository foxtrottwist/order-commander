const mongoose = require('mongoose')

const { Schema } = mongoose
const InventoryItemSchema = require('./InventoryItem')

const inventoryListSchema = new Schema({
  listTitle: String,
  list: [InventoryItemSchema],
  dateCreated: Date,
})

mongoose.model('inventoryLists', inventoryListSchema)
