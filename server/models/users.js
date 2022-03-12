const mongoose = require('mongoose')

const userS = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
        },
    ],
})

module.exports = mongoose.model('Users', userS)
