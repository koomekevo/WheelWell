const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");

// Import the database connection function
const connectDB = require("./config/database");

// Load environment variables from a .env file
dotenv.config();

// Initialize Express
const app = express();

// Import and use middleware for parsing JSON
app.use(express.json());

// Import the authController
const authController = require('./controllers/authController'); // Adjust the path as needed

// Define routes for registration and login
app.post('/api/register', authController.register); // Route for user registration
app.post('/api/login', authController.login); // Route for user login

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(morgan("combined"));

// Initialize Passport
app.use(passport.initialize());

// Configure Passport with the JWT strategy
require("./config/passport")(passport);

// API Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const mechanicRoutes = require("./routes/mechanicRoutes");
const chatRoutes = require("./routes/chatRoutes");
const requestRoutes = require("./routes/requestRoutes");

// Use the API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/mechanics", mechanicRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/requests", requestRoutes);

// Serve static assets in production (for React frontend)
if (process.env.NODE_ENV === "production") {
  // Set the static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start your server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
