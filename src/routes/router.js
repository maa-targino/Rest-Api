const express = require('express')
const router = express.Router()
const dealController = require('../controllers/dealController')
const orderController = require('../controllers/orderController')

router.get('/status', dealController.status)
router.get('/deals', dealController.getAllDeals)
router.get('/deals/won', dealController.getAllDealsWon)
router.post('/deals', dealController.postNewDeal)
router.post('/database', dealController.saveDealMongoDb)
router.post('/orders', orderController.postOrder)

module.exports = router