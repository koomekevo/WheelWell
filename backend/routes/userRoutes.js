const express = require("express");
const router = express.Router();
const passport = require("passport");
const userService = require("../services/userService");

// Get user profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userService.getUserProfile
);

// Update user profile
router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userService.updateUserProfile
);

// Change user password
router.put(
  "/change-password",
  passport.authenticate("jwt", { session: false }),
  userService.changeUserPassword
);

// Add more user-related routes as needed

module.exports = router;
