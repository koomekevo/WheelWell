const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User"); // Replace with your actual User model
const Mechanic = require("../models/Mechanic"); // Replace with your actual Mechanic model
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET; // Use your JWT secret key stored in the .env file

module.exports = (passport) => {
  passport.use(
    "user-jwt",
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        return done(null, false);
      });
    })
  );

  passport.use(
    "mechanic-jwt",
    new JwtStrategy(opts, (jwt_payload, done) => {
      Mechanic.findById(jwt_payload.mechanicId, (err, mechanic) => {
        if (err) return done(err, false);
        if (mechanic) return done(null, mechanic);
        return done(null, false);
      });
    })
  );
};
