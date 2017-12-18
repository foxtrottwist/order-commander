const mongoose = require('mongoose')
const InventoryItemSchema = require('./InventoryItem')

const { Schema } = mongoose

const InventoryListSchema = new Schema({
  title: String,
  list: [InventoryItemSchema],
  dateCreated: Date,
})

mongoose.model('inventoryLists', InventoryListSchema)
