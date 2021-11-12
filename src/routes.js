const express = require('express')
const routes = express.Router()
const controller = require('./controller')
const model = require('./model')

routes.get('/home', controller.home)
routes.get('/status', controller.status)
routes.post('/user', controller.userPost)
routes.post('/consult', controller.userGet)

module.exports = routes