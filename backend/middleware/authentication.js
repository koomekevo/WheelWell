const passport = require("passport");
const passportJWT = require("passport-jwt");

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const User = require("../models/User"); // Replace with your actual User model
const Mechanic = require("../models/Mechanic"); // Replace with your actual Mechanic model

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET, // Use your secret key stored in the .env file
};

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    // Check if the payload contains a user ID
    if (jwt_payload.id) {
      User.findById(jwt_payload.id, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        return done(null, false);
      });
    }
    // Check if the payload contains a mechanic ID
    else if (jwt_payload.mechanicId) {
      Mechanic.findById(jwt_payload.mechanicId, (err, mechanic) => {
        if (err) return done(err, false);
        if (mechanic) return done(null, mechanic);
        return done(null, false);
      });
    } else {
      return done(null, false);
    }
  })
);

const authenticateUser = passport.authenticate("jwt", { session: false });
const authenticateMechanic = passport.authenticate("jwt", { session: false });

module.exports = {
  authenticateUser,
  authenticateMechanic,
};
