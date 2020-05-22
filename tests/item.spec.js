const supertest = require('supertest')
const item = require('../data/item')
const itemRoute = require('../routes/item')

describe('GET /items', () => {
    it('can get the items', () => {
        supertest(itemRoute)
            .get('/items')
            .expect(200)
    })
})

describe('POST /items/add', () => {
  it('can add an item', () => {
    supertest(itemRoute)
        .post('/items/add')
        .expect(500)
  })
})