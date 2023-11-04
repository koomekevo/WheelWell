const express = require("express");
const userProfileController = require("../controllers/userProfileController");

const router = express.Router();

// Get user profile by user ID
router.get("/user/:userId", userProfileController.getUserProfile);

// Update user profile
router.put("/user/:userId", userProfileController.updateUserProfile);

module.exports = router;
