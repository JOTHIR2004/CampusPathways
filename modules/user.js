const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    mobile: String,
    username: { type: String, unique: true },
    password: String, // Make sure to hash this before saving
    isVerified: { type: Boolean, default: false },
    verificationToken: String
});

module.exports = mongoose.model("User", UserSchema);
    