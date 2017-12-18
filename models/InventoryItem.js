const mongoose = require('mongoose')

const { Schema } = mongoose

const InventoryItemSchema = new Schema({
  sortOrder: Number,
  inventoryItem: String,
  count: { type: Number, default: 0 },
})

module.exports = InventoryItemSchema
