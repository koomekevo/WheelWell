// Import the Chat model and any required dependencies
const Chat = require("../models/Chat"); // Replace with your actual Chat model

const chatController = {
  // Get chat messages for a specific chat room
  getChatMessages: (req, res) => {
    const chatId = req.params.chatId;

    Chat.findById(chatId, (err, chat) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching chat messages" });
      }

      if (!chat) {
        return res.status(404).json({ message: "Chat not found" });
      }

      res.json({ messages: chat.messages });
    });
  },

  // Send a new message in a chat room
  sendMessage: (req, res) => {
    const chatId = req.params.chatId;
    const { text, sender } = req.body;

    Chat.findById(chatId, (err, chat) => {
      if (err) {
        return res.status(500).json({ message: "Error sending message" });
      }

      if (!chat) {
        return res.status(404).json({ message: "Chat not found" });
      }

      // Create a new message and add it to the chat
      chat.messages.push({ text, sender });

      // Save the updated chat
      chat.save((saveErr) => {
        if (saveErr) {
          return res.status(500).json({ message: "Error sending message" });
        }

        res.json({ message: "Message sent successfully" });
      });
    });
  },

  // Add more chat-related actions as needed
};

module.exports = chatController;
