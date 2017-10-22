const mongoose = require('mongoose')

const { Schema } = mongoose

const inventoryItemSchema = new Schema({
  category: String,
  sortOrder: Number,
  inventoryItem: String,
  count: { type: Number, default: 0 },
})

module.exports = inventoryItemSchema
