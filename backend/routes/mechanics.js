// routes/mechanics.js
const express = require('express');
const router = express.Router();
const Mechanic = require('../models/Mechanic');

// POST to create a new mechanic
router.post('/mechanics', async (req, res) => {
  try {
    const { name, location } = req.body;

    // Create a new mechanic
    const newMechanic = new Mechanic({ name, location });

    // Save the mechanic to the database
    const savedMechanic = await newMechanic.save();

    res.status(201).json(savedMechanic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new mechanic' });
  }
});

// GET nearby mechanics based on user's location
router.get('/mechanics', async (req, res) => {
  try {
    // Assuming user's location is provided in query parameters as `latitude` and `longitude`
    const { latitude, longitude } = req.query;

    // Implement logic to fetch nearby mechanics using MongoDB geospatial queries
    // Example: const nearbyMechanics = await Mechanic.find({
    //   location: {
    //     $near: {
    //       $geometry: {
    //         type: 'Point',
    //         coordinates: [parseFloat(longitude), parseFloat(latitude)],
    //       },
    //       $maxDistance: 1000, // Search for mechanics within a radius of 1000 meters (adjust as needed)
    //     },
    //   },
    // });

    res.status(200).json(nearbyMechanics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nearby mechanics' });
  }
});

// PUT to update a mechanic's details
router.put('/mechanics/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    // Find the mechanic by ID and update the details
    const updatedMechanic = await Mechanic.findByIdAndUpdate(
      id,
      { name, location },
      { new: true } // Return the updated mechanic instead of the original one
    );

    res.status(200).json(updatedMechanic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the mechanic' });
  }
});

// DELETE to remove a mechanic
router.delete('/mechanics/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the mechanic by ID and remove it
    await Mechanic.findByIdAndRemove(id);

    res.status(200).json({ message: 'Mechanic deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the mechanic' });
  }
});

module.exports = router;
