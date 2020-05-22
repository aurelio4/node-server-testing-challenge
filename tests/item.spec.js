const supertest = require('supertest')
const server = require('../server')
const itemRoute = require('../routes/item')
const items = require('../data/item')

describe('testing tests', () => {
    it('can test tests', () => {
        expect(true).toBeTruthy()
    })
})

describe('GET /items', () => {
  it('can get all items', () => {
    return supertest(server).get('/items')
        .expect(200)
        .then(res => {
            expect(res.body.length).toBeTruthy()
        })
  })
})

describe('POST /items/add', () => {
    it('can add an item', () => {
        const itemToAdd = {
            "name": "test item 9",
            "levelReq": 60,
            "durability": 100,
            "enchant": null
        }

        return supertest(server).post('/items/add')
            .send(itemToAdd)
            .expect(201)
    })
})

describe('DELETE /items/remove/:id', () => {
  it('can delete an item at an ID', () => {
    return supertest(server).delete('/items/remove/4')
        .expect(200)
  })
})