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
  // You can add more fields here related to mechanics, like contact details, expertise, etc.
});

// Create a geospatial index on the 'location' field for efficient geospatial queries
mechanicSchema.index({ location: '2dsphere' });

const Mechanic = mongoose.model('Mechanic', mechanicSchema);
module.exports = Mechanic;
