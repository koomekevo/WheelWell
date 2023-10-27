const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the application if the connection fails
  }
};

module.exports = connectDB;
