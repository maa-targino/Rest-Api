const express = require('express')
const routes = require('./routes/router')
const cors = require ('cors')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/v1', routes)
app.use(cors())

module.exports = app