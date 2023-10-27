// Import required dependencies
const passport = require("passport");
const User = require("../models/User"); // Replace with your actual User model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  // User registration
  register: async (req, res) => {
    const { username, password } = req.body;

    try {
      // Check if a user with the same username already exists
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: "Username already in use" });
      }

      // Create a new user
      const newUser = new User({ username });
      newUser.setPassword(password);

      await newUser.save();

      return res.status(201).json({ message: "Registration successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Registration failed" });
    }
  },

  // User login
  login: (req, res) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({ message: "Login failed" });
      }

      req.login(user, { session: false }, async (loginErr) => {
        if (loginErr) {
          return res.status(500).json({ message: "Login failed" });
        }

        // Generate a JWT token
        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_SECRET
        );

        return res.json({ token });
      });
    })(req, res);
  },
};

module.exports = authController;
