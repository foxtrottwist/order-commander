const mongoose = require('mongoose')
const router = require('express').Router()

const InventoryList = mongoose.model('inventoryLists')

router.route('/').post(async (req, res) => {
  const { _id } = req.body

  await InventoryList.findOneAndRemove({ _id })

  const lists = await InventoryList.find()

  res.send(lists)
})

module.exports = router
