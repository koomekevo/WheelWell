const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  mechanic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mechanic",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
