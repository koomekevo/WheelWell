const Request = require("../models/Request"); // Import your Request model

const requestController = {
  // Send a request
  sendRequest: async (req, res) => {
    const { motoristId, mechanicId, message } = req.body;

    try {
      // Create a new request
      const request = new Request({
        motorist: motoristId,
        mechanic: mechanicId,
        message,
      });

      await request.save();

      return res.status(201).json({ message: "Request sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Request sending failed" });
    }
  },

  // Get requests sent to a mechanic or received by a motorist
  getRequests: async (req, res) => {
    const { userId, userType } = req.params;

    try {
      let requests = [];

      if (userType === "mechanic") {
        requests = await Request.find({ mechanic: userId });
      } else if (userType === "motorist") {
        requests = await Request.find({ motorist: userId });
      }

      return res.status(200).json(requests);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch requests" });
    }
  },
};

module.exports = requestController;
