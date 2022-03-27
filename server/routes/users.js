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

    try {
        const signInUser = await Users.findOne({ name: req.body.name })

        if (signInUser !== null) {
            if (signInUser.password !== req.body.password) {
                return res.send('Bad password')
            }
            req.session.user = signInUser
            res.send(signInUser)
        }
    } catch {
        return res.send('User not found')
    }
    res.status(404)
    return res.send()
})

r.post('/signUp', async (req, res, next) => {
    if (req.body.name.trim() === '') {
        return res.send('Name is missing')
    }
    if (req.body.password === '') {
        return res.send('Password is missing')
    }

    try {
        const signUpUser = await Users.findOne({ name: req.body.name })
        console.log(signUpUser)
        if (signUpUser !== null) {
            return res.send('Account already created')
        }
        const newU = new Users({
            name: req.body.name,
            password: req.body.password,
        })
        req.session.user = newU
        newU.save()
        console.log('dd')
        return res.send(newU)
    } catch (e) {
        res.send(e)
    }
})

module.exports = r
