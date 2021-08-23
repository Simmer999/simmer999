require('dotenv').config()

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/nakota', (req, res) => {
    res.render('nakota')
})

router.get('/FrontPage', (req, res) => {
    res.render('FrontPage')
})

module.exports = router