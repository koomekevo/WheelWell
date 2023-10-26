const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mechanic",
    },
  ],
  messages: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mechanic",
      },
      text: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
