const session = require('express-session')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { data } = require('../data')
const mongoose = require('mongoose')
const MongoDBStore = require('connect-mongodb-session')(session)
const Recipe = require('./models/recipe')
const usersRoutes = require('./routes/users')
const recipieRoutes = require('./routes/recipe')

const app = express()

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
        credentials: true,
    })
)

const MONGODB_URI =
    'mongodb+srv://AdminJean:6x7QT2VueNzylj1v@cluster0.2rxqq.mongodb.net/ASPRecipeApp?retryWrites=true&w=majority'
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',
})

app.use(bodyParser.json({ limit: '1gb' }))
app.use(bodyParser.urlencoded({ limit: '1gb' }))

app.use(
    session({
        secret: 'sss',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
)

app.use(usersRoutes)
app.use(recipieRoutes)

app.get('/first', (req, res, next) => {
    res.send({ data: data[0] })
})

app.get('/random', (req, res, next) => {
    let random = Math.floor(Math.random(0, data.length - 1) * 10)
    res.send({ data: data[random] })
})

app.get('/', (req, res, next) => {
    res.send({ status: 404 })
})

app.post('/', (req, res, next) => {
    res.send({ status: 404 })
})

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('DB Connection ok')
        app.listen(3001)
        Recipe.find().then((rep) => {
            if (rep.length !== data.length) {
                for (let i = 0; i < Math.abs(data.length - rep.length); i++) {
                    const recipe = new Recipe({
                        name: data[rep.length + i].name,
                        description: data[rep.length + i].description,
                        stars: data[rep.length + i].stars,
                        type: data[rep.length + i].type,
                        imgURL: data[rep.length + i].imgURL,
                    })
                    recipe.save().then(() => {
                        console.log(
                            `Recipe ${data[rep.length + i].name} created`
                        )
                    })
                }
            } else {
                console.log('DB already populated')
            }
        })
    })
    .catch((error) => console.log(error))

module.exports = app
