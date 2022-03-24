const app = require('../server/server')
const supertest = require('supertest')
const request = supertest(app)

describe('Testing POSTS/shots endpoint', function () {
    it('respond with valid HTTP status code and description and message', function (done) {
        // Make POST Request
        supertest(app)
            .post('/signIn')
            .send({
                name: 'How to write a shot',
                password: 'Access the Edpresso tutorial',
            })
            .then((response) => {
                console.log(response)
                expect(response.status).toBe(200)
                expect(response.body.status).toBe('success')
                expect(response.body.message).toBe('Shot Saved Successfully.')
            })

        // Compare response with expectations
    })
})
