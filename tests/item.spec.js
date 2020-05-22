const supertest = require('supertest')
const item = require('../data/item')
const itemRoute = require('../routes/item')

describe('GET /items', () => {
    it('can get items', done => {
        const res = supertest(itemRoute).get('/test').expect(200)
        done()
    })
})

describe('POST /items/add', () => {
    it('can add a user', () => {
        const user = {
            "name": "test item 9",
            "levelReq": 60,
            "durability": 100,
            "enchant": null
        }
        supertest(item)
            .post('/items/add')
            .send(user)
            .expect(500)
    })
})