// Import the Request model and any required dependencies
const Request = require("../models/Request"); // Replace with your actual Request model

const requestController = {
  // Create a new service request
  createRequest: (req, res) => {
    const { title, description, location /* other request fields */ } =
      req.body;

    // Create a new request
    const newRequest = new Request({
      title,
      description,
      location,
      /* other request fields */
      motorist: req.user.id, // Assuming the requester is a motorist
    });

    newRequest.save((err, request) => {
      if (err) {
        return res.status(500).json({ message: "Request creation failed" });
      }

      res
        .status(201)
        .json({ message: "Request created successfully", request });
    });
  },

  // Get all service requests
  getAllRequests: (req, res) => {
    Request.find({}, (err, requests) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching requests" });
      }

      res.json({ requests });
    });
  },

  // Get a specific service request by ID
  getRequestById: (req, res) => {
    const requestId = req.params.requestId;

    Request.findById(requestId, (err, request) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching request" });
      }

      if (!request) {
        return res.status(404).json({ message: "Request not found" });
      }

      res.json({ request });
    });
  },

  // Update a service request by ID
  updateRequest: (req, res) => {
    const requestId = req.params.requestId;
    const { title, description, location /* other request fields */ } =
      req.body;

    Request.findByIdAndUpdate(
      requestId,
      {
        title,
        description,
        location,
        /* other request fields */
      },
      { new: true }, // Return the updated request
      (err, updatedRequest) => {
        if (err) {
          return res.status(500).json({ message: "Request update failed" });
        }

        res.json({
          message: "Request updated successfully",
          request: updatedRequest,
        });
      }
    );
  },

  // Delete a service request by ID
  deleteRequest: (req, res) => {
    const requestId = req.params.requestId;

    Request.findByIdAndRemove(requestId, (err) => {
      if (err) {
        return res.status(500).json({ message: "Request deletion failed" });
      }

      res.json({ message: "Request deleted successfully" });
    });
  },

  // Add more request-related actions as needed
};

module.exports = requestController;
