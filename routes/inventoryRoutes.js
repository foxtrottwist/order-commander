module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json([
      { name: 'apple', count: 0 },
      { name: 'orange', count: 0 },
      { name: 'pear', count: 0 },
      { name: 'lemon', count: 0 },
      { name: 'lime', count: 0 },
    ])
  })
}
