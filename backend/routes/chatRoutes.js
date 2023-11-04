const express = require("express");
const chatController = require("../controllers/chatController");

const router = express.Router();

// Create a new chat
router.post("/chats", chatController.createChat);

// Get all chats for a user
router.get("/chats/:userId", chatController.getChats);

module.exports = router;
