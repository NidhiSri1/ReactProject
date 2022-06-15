const mongoose = require("mongoose");

//userschema

const userDetails = new mongoose.Schema({
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    DOB: { type: String, required: true },
    State: { type: String, required: true },
    Result: { type: String },
    Email: { type: String, required: true },
    Pincode: { type: String, required: true },
});

module.exports = mongoose.model("userDetails", userDetails);
