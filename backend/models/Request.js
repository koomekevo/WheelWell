const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  motorist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Motorist",
    required: true,
  },
  mechanic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mechanic",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Sent", "Accepted", "Rejected"],
    default: "Sent",
  },
  // You can add more fields relevant to a request here
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
