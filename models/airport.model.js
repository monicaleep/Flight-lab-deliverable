const mongoose = require('mongoose')
const Terminal = require('./terminal.model')
const Airport = mongoose.model(
    "Airport",
    new mongoose.Schema({
        country: String,
        terminals: [Terminal.schema],
        capacity: Number,
        opened: Date,
    })
)

module.exports = Airport
