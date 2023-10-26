const express = require("express");
const router = express.Router();
const passport = require("passport");
const mechanicService = require("../services/mechanicService");

// Get mechanic profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  mechanicService.getMechanicProfile
);

// Update mechanic profile
router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  mechanicService.updateMechanicProfile
);

// Add more mechanic-related routes as needed

module.exports = router;
