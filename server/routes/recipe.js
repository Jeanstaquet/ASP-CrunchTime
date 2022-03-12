const express = require('express')
const r = express.Router()
const Recipe = require('../models/recipe')

r.get('/recipies', async (req, res, next) => {
    const recipies = await Recipe.find()

    return res.send(recipies)
})

r.get('/recipie/:id', async (req, res, next) => {
    const recipieId = await Recipe.findOne({
        id: recipieId,
    })

    return res.send(recipies)
})

r.get('/random', async (req, res, next) => {
    const recipies = await Recipe.find()

    const randomNum = Math.floor(Math.random(0, recipies.length - 1))

    return res.send(recipies[randomNum])
})

module.exports = r
