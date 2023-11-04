const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

// User registration
router.post('/register', authController.register);

// User login
router.post('/login', authController.login);

// Example of a protected route
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'This is a protected route.' });
});

module.exports = router;
