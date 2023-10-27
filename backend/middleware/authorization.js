const User = require("../models/User"); // Replace with your actual User model
const Mechanic = require("../models/Mechanic"); // Replace with your actual Mechanic model

// Middleware to check if a user is an admin
const isAdmin = (req, res, next) => {
  // Assuming you have a "role" property in your User or Mechanic model
  const { role } = req.user; // Access the user's role

  if (role === "admin") {
    // User is an admin, grant access
    return next();
  } else {
    // User does not have admin privileges, deny access
    return res
      .status(403)
      .json({ message: "Access denied. You are not an admin." });
  }
};

module.exports = {
  isAdmin,
  // Add more authorization middleware functions as needed
};
