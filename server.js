const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { data } = require('./data')
//const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001

const app = express()

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
        credentials: true,
    })
)

app.get('/first', (req, res, next) => {
    res.send({ data: data[0] })
})

app.get('/random', (req, res, next) => {
    let random = Math.floor(Math.random(0, data.length - 1) * 10)
    res.send({ data: data[random] })
})

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb' }))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
