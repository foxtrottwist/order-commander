const mongoose = require('mongoose')

const InventoryList = mongoose.model('inventoryLists')

module.exports = (app) => {
  app.get('/api/inventory_lists', async (req, res) => {
    const lists = await InventoryList.find()

    res.send(lists)
  })

  app.post('/api/inventory_lists', async (req, res) => {
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
}
