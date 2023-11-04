const express = require("express");
const motoristController = require("../controllers/motoristController");

const router = express.Router();

// Create a new motorist profile
router.post("/motorists", motoristController.createMotorist);

// Get a list of motorist profiles
router.get("/motorists", motoristController.getMotorists);

module.exports = router;
