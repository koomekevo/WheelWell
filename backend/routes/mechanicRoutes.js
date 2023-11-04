const express = require("express");
const mechanicController = require("../controllers/mechanicController");

const router = express.Router();

// Create a new mechanic profile
router.post("/mechanics", mechanicController.createMechanic);

// Get a list of available mechanics
router.get("/mechanics/available", mechanicController.getAvailableMechanics);

module.exports = router;
