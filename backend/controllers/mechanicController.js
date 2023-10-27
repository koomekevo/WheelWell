// Import the Mechanic model and any required dependencies
const Mechanic = require("../models/Mechanic"); // Replace with your actual Mechanic model

const mechanicController = {
  // Get mechanic profile
  getMechanicProfile: (req, res) => {
    res.json({ mechanic: req.user });
  },

  // Update mechanic profile
  updateMechanicProfile: (req, res) => {
    const { username, email, fullName /* other mechanic fields */ } = req.body;
    const mechanicId = req.user.id;

    // Find the mechanic by their ID and update the profile fields
    Mechanic.findByIdAndUpdate(
      mechanicId,
      { username, email, fullName /* other mechanic fields */ },
      { new: true }, // Return the updated mechanic
      (err, updatedMechanic) => {
        if (err) {
          return res.status(500).json({ message: "Profile update failed" });
        }

        res.json({ mechanic: updatedMechanic });
      }
    );
  },

  // Add more mechanic-related actions as needed

  // Example: Delete mechanic account
  deleteMechanic: (req, res) => {
    Mechanic.findByIdAndRemove(req.user.id, (err) => {
      if (err) {
        return res.status(500).json({ message: "Account deletion failed" });
      }

      res.json({ message: "Account deleted successfully" });
    });
  },
};

module.exports = mechanicController;
