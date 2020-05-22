const router = require('express').Router()
const items = require('../data/item')

router.get('/', (req, res) => {
    try {
        res.status(200).json(items)
    } catch(err) {
        res.status(500).json({ error: "some server error, sorry" })
    }
})

router.post('/add', (req, res) => {
    try {
        const { name, levelReq, durability, enchant } = req.body
        const newId = items[items.length - 1].id + 1
        const newItem = { id: newId, name, levelReq, durability, enchant }
        items.push(newItem)
        res.status(201).json(items.filter(itemId => itemId.id === newId))
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: "server error, sorry" })
    }
})

router.get('/enchant/:id', (req, res) => {
    try {
        const id = req.params.id
        const item = items.filter(item => item.id == id)
        res.status(200).json({ enchant: item[0].enchant })
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: "server error, sorry" })
    }
})

router.post('/enchant/:id', (req, res) => {
    try {
        const { enchant } = req.body
        const id = req.params.id
        const item = items.filter(item => item.id == id)
        item[0].enchant = enchant
        res.status(200).json(items.filter(item => item.id == id))
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: "server error, sorry" })
    }
})

router.delete('/remove/:id', (req, res) => {
    try {
        const id = req.params.id
        const index = id - 1
        const removedItem = items.splice(index, 1)
        res.status(200).json(removedItem)
    } catch(err) {
        res.status(500).json({ error: "server error, sorry" })
    }
})

module.exports = router