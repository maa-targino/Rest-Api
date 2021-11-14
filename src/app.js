const express = require('express')
const router = require('./routes/router')
const cors = require ('cors')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/v1', router)
app.use(cors())

module.exports = app