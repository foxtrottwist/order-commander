const mongoose = require('mongoose')
const router = require('express').Router()

const InventoryList = mongoose.model('inventoryLists')

router
  .route('/')
  .get(async (req, res) => {
    const lists = await InventoryList.find()

    res.send(lists)
  })
  .post(async (req, res) => {
    const { title, list } = req.body

    const inventoryList = new InventoryList({
      title: title.toUpperCase(),
      list: list.split(',').map((inventoryItem, index) => ({
        inventoryItem: inventoryItem.trim().toUpperCase(),
        sortOrder: index,
      })),
      dateCreated: Date.now(),
    })

    await inventoryList.save()
    res.send('Success!')
  })

module.exports = router
