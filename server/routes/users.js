const express = require('express')
const r = express.Router()
const Users = require('../models/users')

r.post('/signIn', async (req, res, next) => {
    if (req.body.name.trim() === '') {
        return res.send('Name is missing')
    }
    if (req.body.password === '') {
        return res.send('Password is missing')
    }
    const signInUser = await Users.findOne({ name: req.body.name })
    if (user !== undefined) {
        if (user.password !== req.body.password) {
            return res.send('Bad password')
        }
        req.session.user = signInUser
        res.send(signInUser)
    }
    return res.send('User not found')
})

r.post('/signUp', async (req, res, next) => {
    if (req.body.name.trim() === '') {
        return res.send('Name is missing')
    }
    if (req.body.password === '') {
        return res.send('Password is missing')
    }
    const signUpUser = await Users.findOne({ name: req.body.name })
    if (signUpUser !== undefined) {
        return res.send('Account already created')
    }
    const newU = new Users({
        name: req.body.name,
        password: req.body.password,
    })
    req.session.user = newU
    newU.save()
    return res.send(newU)
})

module.exports = r
