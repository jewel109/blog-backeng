const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({

  body: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  sendTo: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true })

module.exports = mongoose.model("Message", messageSchema)
