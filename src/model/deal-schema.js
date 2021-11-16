const mongoose = require('mongoose')

const dealSchema = mongoose.Schema({
    title: {type: String, required: true},
    status:{type: String, required: true},
    value: {type: Number, required: true},
    quantity:{type: Number, required: true},
    amount: {type: Number, default: function(){ return this.value * this.quantity }},
    currency: {type: String, required: true},
    add_time: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Deals', dealSchema)
