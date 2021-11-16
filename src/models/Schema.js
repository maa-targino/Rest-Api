const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    title: {type: String, required: true},
    status:{type: String, required: true},
    value: {type: String, required: true},
    currency: {type: String, required: true},
    add_time: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Deals', Schema)
