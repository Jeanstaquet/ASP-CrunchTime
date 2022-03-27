const mongoose = require('mongoose')

const userS = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
})

module.exports = mongoose.model('Users', userS)
