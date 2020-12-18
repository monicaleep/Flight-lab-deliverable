const mongoose = require('mongoose')

const TerminalSchema = new mongoose.Schema({
  name: String,
  flights: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight"
  }]
})
const Terminal = mongoose.model(
  "Terminal",
  TerminalSchema
)

module.exports = Terminal
