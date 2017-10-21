const mongoose = require('mongoose')

const InventoryList = mongoose.model('inventoryList')

module.exports = (app) => {
  app.get('/api/inventory_list', async (req, res) => {
    const list = await InventoryList.find()

    res.send(list)
  })

  app.post('/api/inventory_list', async (req, res) => {
    const {
      listTitle, category, sortOrder, inventoryItem, count,
    } = req.body

    const inventoryList = new InventoryList({
      listTitle,
      category,
      sortOrder,
      inventoryItem,
      count,
    })

    await inventoryList.save()
  })
}
