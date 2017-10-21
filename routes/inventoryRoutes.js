module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ key: 'hello world', value: 'hello api' })
  })
}
