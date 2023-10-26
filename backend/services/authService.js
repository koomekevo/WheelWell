const User = require("../models/User");
const passport = require("passport");

const authService = {
  register: (req, res) => {
    // Implement user registration logic using the User model
  },
  login: (req, res) => {
    // Passport authentication has already taken place; you can send a response or perform additional tasks here
    res.json({ message: "Login successful", user: req.user });
  },
};

module.exports = authService;
