const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // Add more fields specific to mechanics here
});

const Mechanic = mongoose.model("Mechanic", mechanicSchema);

module.exports = Mechanic;
