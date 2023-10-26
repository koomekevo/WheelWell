const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mechanic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mechanic",
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Completed"],
    default: "Pending",
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
