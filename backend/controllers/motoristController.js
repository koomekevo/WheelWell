const Motorist = require("../models/Motorist"); // Import your Motorist model

const motoristController = {
  // Create a new motorist profile
  createMotorist: async (req, res) => {
    const { userId /* other motorist data */ } = req.body;

    try {
      // Check if a motorist profile already exists for the user
      const existingMotorist = await Motorist.findOne({ user: userId });

      if (existingMotorist) {
        return res
          .status(400)
          .json({ message: "Motorist profile already exists" });
      }

      // Create a new motorist profile
      const motorist = new Motorist({ user: userId /* other motorist data */ });

      await motorist.save();

      return res
        .status(201)
        .json({ message: "Motorist profile created successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Motorist profile creation failed" });
    }
  },

  // Get a list of motorist profiles
  getMotorists: async (req, res) => {
    try {
      const motoristProfiles = await Motorist.find({
        /* Add conditions to filter motorist profiles */
      });

      return res.status(200).json(motoristProfiles);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Failed to fetch motorist profiles" });
    }
  },
};

module.exports = motoristController;
