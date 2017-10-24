const mongoose = require('mongoose')

const InventoryList = mongoose.model('inventoryLists')

module.exports = (app) => {
  app.get('/api/inventory_lists', async (req, res) => {
    const list = await InventoryList.find()

    res.send(list)
  })

  app.post('/api/inventory_lists', async (req, res) => {
    const { listTitle, list } = req.body

    const inventoryList = new InventoryList({
      listTitle,
      list: list
        .split(',')
        .map((inventoryItem, index) => ({
          inventoryItem: inventoryItem.trim().toUpperCase(),
          sortOrder: index,
        })),
      dateCreated: Date.now(),
    })

    await inventoryList.save()
  })
}
