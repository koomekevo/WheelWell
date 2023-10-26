const express = require('express');
const router = express.Router();
const passport = require('passport');
const chatService = require('../services/chatService');

// Get chat messages for a specific chat room
router.get('/:chatId', passport.authenticate('jwt', { session: false }), chatService.getChatMessages);

// Send a new message in a chat room
router.post('/:chatId', passport.authenticate('jwt', { session: false }), chatService.sendMessage);

// Add more chat-related routes as needed

module.exports = router;
