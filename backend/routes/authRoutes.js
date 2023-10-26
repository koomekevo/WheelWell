const express = require("express");
const router = express.Router();
const passport = require("passport");
const authService = require("../services/authService");

// Registration route
router.post("/register", authService.register);

// Login route
router.post("/login", passport.authenticate("local"), authService.login);

module.exports = router;
