const Chat = require("../models/Chat"); // Import your Chat model
const User = require("../models/User"); // Import your User model

const chatController = {
  // Create a new chat
  createChat: async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
      // Check if the sender and receiver exist
      const sender = await User.findById(senderId);
      const receiver = await User.findById(receiverId);

      if (!sender || !receiver) {
        return res
          .status(400)
          .json({ message: "Sender or receiver not found" });
      }

      // Create a new chat
      const chat = new Chat({
        sender: senderId,
        receiver: receiverId,
        messages: [{ user: senderId, text: message }],
      });

      await chat.save();

      return res.status(201).json({ message: "Chat created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Chat creation failed" });
    }
  },

  // Get all chats for a user
  getChats: async (req, res) => {
    const userId = req.params.userId;

    try {
      const chats = await Chat.find({
        $or: [{ sender: userId }, { receiver: userId }],
      }).populate("sender receiver");

      return res.status(200).json(chats);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch chats" });
    }
  },
};

module.exports = chatController;
