const express = require('express')
const itemRoute = require('./routes/item')

const PORT = process.env.PORT || 5000
const server = express()

server.use(express.json())
server.use('/items', itemRoute)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'working' })
})

server.listen(PORT, () => {
  // console.log(`server listening on port:${PORT}`)
})