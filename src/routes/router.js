const express = require('express')
const router = express.Router()
const controller = require('../controllers/dealController')
// const model = require('../models/Deal')
// const axios = require('axios')

router.get('/status', controller.status)
router.get('/deals', controller.getAllDealsPipedrive)
router.post('/post', controller.savePostMongoDb)
router.post('/register')
module.exports = router