const express = require('express')
const app = express()
const port = 8080

const api = require('./api/product/product')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/product',api.home())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})