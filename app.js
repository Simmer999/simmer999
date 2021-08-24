require('dotenv').config()

const express = require('express')
const app = express()
const router = express.Router()
const ejs = require('ejs')
const path = require('path')


const mongoose = require('mongoose')
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.log.bind('console.error'))
db.once('open', (callback) => {
    console.log('Connected to MongoDB!!!')
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const routes = require('./routes/routes')
// const main = require('./main')
app.use('/', routes)
// app.use('/', main)

module.exports = app