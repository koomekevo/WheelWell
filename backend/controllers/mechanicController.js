const Mechanic = require('../models/Mechanic'); // Import your Mechanic model

const mechanicController = {
  // Create a new mechanic profile
  createMechanic: async (req, res) => {
    const { userId, /* other mechanic data */ } = req.body;

    try {
      // Check if a mechanic profile already exists for the user
      const existingMechanic = await Mechanic.findOne({ user: userId });

      if (existingMechanic) {
        return res.status(400).json({ message: 'Mechanic profile already exists' });
      }

      // Create a new mechanic profile
      const mechanic = new Mechanic({ user: userId, /* other mechanic data */ });

      await mechanic.save();

      return res.status(201).json({ message: 'Mechanic profile created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Mechanic profile creation failed' });
    }
  },

  // Get a list of available mechanics
  getAvailableMechanics: async (req, res) => {
    try {
      const availableMechanics = await Mechanic.find({ /* Add conditions to filter available mechanics */ });

      return res.status(200).json(availableMechanics);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to fetch available mechanics' });
    }
  },
};

module.exports = mechanicController;
