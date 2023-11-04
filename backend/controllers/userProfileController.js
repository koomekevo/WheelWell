const User = require("../models/User"); // Import your User model

const userProfileController = {
  // Get user profile by user ID
  getUserProfile: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch user profile" });
    }
  },

  // Update user profile
  updateUserProfile: async (req, res) => {
    const { userId } = req.params;
    const { names, email, password } = req.body;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update user profile properties as needed
      if (names) user.names = names;
      if (email) user.email = email;
      if (password) user.setPassword(password);

      await user.save();

      return res
        .status(200)
        .json({ message: "User profile updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to update user profile" });
    }
  },
};

module.exports = userProfileController;
