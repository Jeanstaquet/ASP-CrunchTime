const mongoose = require('mongoose')

const recipe = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
    },
    stars: {
        type: Number,
    },
    imgURL: {
        type: String,
    },
})

module.exports = mongoose.model('Recipe', recipe)
