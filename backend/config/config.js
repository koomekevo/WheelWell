module.exports = {
  // Database configuration
  database: {
    // Replace with your MongoDB connection string
    url: "mongodb://localhost:27017/wheelwellapp",
  },

  // JWT (JSON Web Token) secret for authentication
  jwtSecret: "your-jwt-secret-key",

  // Port for the Express server
  port: process.env.PORT || 5000,

  // Configuration for other services (e.g., Google Maps API, Firebase, etc.)
  // Add additional configuration options here

  // Environment-specific configuration
  development: {
    // Configuration for development environment
    // Add environment-specific settings here
  },
  production: {
    // Configuration for production environment
    // Add environment-specific settings here
  },
};
