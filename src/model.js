const mongoose = require('mongoose')

const Deal = mongoose.Schema({
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    amount: {type: Number, default: function(){ return this.price * this.quantity }},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Deals', Deal)