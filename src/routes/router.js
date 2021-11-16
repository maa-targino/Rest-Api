const express = require('express')
const router = express.Router()
const DealController = require('../controllers/deal-controller')
const DrderController = require('../controllers/order-controller')

router.get('/status', DealController.status)
router.get('/deals', DealController.getAllDeals)
router.get('/deals/won', DealController.getAllDealsWon)
router.post('/deals', DealController.postNewDeal)
router.post('/save', DealController.saveDealMongoDb)
router.post('/orders', DrderController.postOrder)

module.exports = router