// Import the User model and any required dependencies
const User = require("../models/User"); // Replace with your actual User model

const userController = {
  // Get user profile
  getUserProfile: (req, res) => {
    res.json({ user: req.user });
  },

  // Update user profile
  updateUserProfile: (req, res) => {
    const { username, email, fullName /* other user fields */ } = req.body;
    const userId = req.user.id;

    // Find the user by their ID and update the profile fields
    User.findByIdAndUpdate(
      userId,
      { username, email, fullName /* other user fields */ },
      { new: true }, // Return the updated user
      (err, updatedUser) => {
        if (err) {
          return res.status(500).json({ message: "Profile update failed" });
        }

        res.json({ user: updatedUser });
      }
    );
  },

  // Change user password
  changeUserPassword: (req, res) => {
    const { currentPassword, newPassword } = req.body;

    User.findById(req.user.id, (err, user) => {
      if (err) {
        return res.status(500).json({ message: "Password change failed" });
      }

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if the current password matches
      if (!user.validPassword(currentPassword)) {
        return res
          .status(400)
          .json({ message: "Current password is incorrect" });
      }

      // Update the user's password
      user.setPassword(newPassword);

      // Save the updated user
      user.save((err) => {
        if (err) {
          return res.status(500).json({ message: "Password change failed" });
        }

        res.json({ message: "Password changed successfully" });
      });
    });
  },

  // Add more user-related actions as needed

  // Example: Delete user account
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.user.id, (err) => {
      if (err) {
        return res.status(500).json({ message: "Account deletion failed" });
      }

      res.json({ message: "Account deleted successfully" });
    });
  },
};

module.exports = userController;
