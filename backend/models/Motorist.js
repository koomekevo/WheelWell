const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const motoristSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields relevant to a motorist's profile here
});

// Hash the password before saving the motorist
motoristSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare the provided password with the stored hashed password
motoristSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Motorist = mongoose.model("Motorist", motoristSchema);

module.exports = Motorist;
