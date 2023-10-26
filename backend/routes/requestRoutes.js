const express = require("express");
const router = express.Router();
const passport = require("passport");
const requestService = require("../services/requestService");

// Create a new service request
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  requestService.createRequest
);

// Get all service requests
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  requestService.getAllRequests
);

// Get a specific service request by ID
router.get(
  "/:requestId",
  passport.authenticate("jwt", { session: false }),
  requestService.getRequestById
);

// Update a service request by ID
router.put(
  "/:requestId",
  passport.authenticate("jwt", { session: false }),
  requestService.updateRequest
);

// Delete a service request by ID
router.delete(
  "/:requestId",
  passport.authenticate("jwt", { session: false }),
  requestService.deleteRequest
);

// Add more request-related routes as needed

module.exports = router;
