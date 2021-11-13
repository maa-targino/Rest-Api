const express = require('express')
const routes = express.Router()
const controller = require('./controller')
const model = require('./model')
// const axios = require('axios')

routes.get('/status', controller.status)
routes.get('/deals', controller.getAllDealsPipedrive)
routes.post('/post', controller.savePostMongoDb)
routes.post('/register')
module.exports = routes