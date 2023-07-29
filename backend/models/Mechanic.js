// models/Mechanic.js
const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'], // We'll use 'Point' as the only possible value for geospatial data
      required: true,
    },
    coordinates: { type: [Number], required: true }, // An array of [longitude, latitude]
  },
  contactDetails: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  expertise: [String], // An array of strings to represent different areas of expertise
  // You can add more fields here related to mechanics, like working hours, services offered, etc.
});

// Create a geospatial index on the 'location' field for efficient geospatial queries
mechanicSchema.index({ location: '2dsphere' });

// Define a static method for finding nearby mechanics
mechanicSchema.statics.findNearbyMechanics = async function (latitude, longitude, maxDistance) {
  try {
    return this.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: 'distance',
          spherical: true,
          maxDistance: maxDistance,
        },
      },
    ]);
  } catch (error) {
    throw new Error('Failed to fetch nearby mechanics');
  }
};

const Mechanic = mongoose.model('Mechanic', mechanicSchema);
module.exports = Mechanic;
