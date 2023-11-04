const express = require("express");
const requestController = require("../controllers/requestController");

const router = express.Router();

// Send a request
router.post("/requests", requestController.sendRequest);

// Get requests sent to a mechanic or received by a motorist
router.get("/requests/:userId/:userType", requestController.getRequests);

module.exports = router;
