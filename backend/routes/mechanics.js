// routes/mechanics.js
const express = require('express');
const router = express.Router();
const Mechanic = require('../models/Mechanic');

// POST to create a new mechanic
router.post('/', async (req, res) => {
  try {
    const { name, location, contactDetails, expertise } = req.body;

    // Create a new mechanic
    const newMechanic = new Mechanic({ name, location, contactDetails, expertise });

    // Save the mechanic to the database
    const savedMechanic = await newMechanic.save();

    res.status(201).json(savedMechanic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new mechanic' });
  }
});

// GET nearby mechanics based on user's location
router.get('/', async (req, res) => {
  try {
    // Assuming user's location is provided in query parameters as `latitude` and `longitude`
    const { latitude, longitude } = req.query;

    // Convert latitude and longitude to floats
    const userLatitude = parseFloat(latitude);
    const userLongitude = parseFloat(longitude);

    // Fetch nearby mechanics using the static method from the Mechanic model
    const nearbyMechanics = await Mechanic.findNearbyMechanics(userLatitude, userLongitude, 1000); // Adjust the maxDistance as needed

    res.status(200).json(nearbyMechanics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nearby mechanics' });
  }
});

// PUT to update a mechanic's details
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, contactDetails, expertise } = req.body;

    // Find the mechanic by ID
    let mechanic = await Mechanic.findById(id);

    // Update the mechanic's details
    mechanic.name = name;
    mechanic.location = location;
    mechanic.contactDetails = contactDetails;
    mechanic.expertise = expertise;

    // Save the updated mechanic
    const updatedMechanic = await mechanic.save();

    res.status(200).json(updatedMechanic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the mechanic' });
  }
});

// DELETE to remove a mechanic
router.delete('/:id', async (req, res) => {
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
