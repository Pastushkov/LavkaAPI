const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
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
  address: {
    type: Object,
    default: {}
  },
  cart: {
    type: Object,
    default: {}
  },
  type: {
    type: String,
    default: "shipper",
  },
});

module.exports = mongoose.model("User", UserSchema);
