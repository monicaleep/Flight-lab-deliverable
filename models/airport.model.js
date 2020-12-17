const mongoose = require('mongoose')

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        country: String,
        terminals: [new mongoose.Schema({
          name: String,
          flights: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Flight"
          }],
          capacity: Number
        })],
        opened: Date,
    })
)

module.exports = Airport
