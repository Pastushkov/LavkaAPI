const mongoose = require("mongoose");
const { defaultUserType } = require("../config");

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
    index: true
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: defaultUserType,
  },
  promToken: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
});

module.exports = mongoose.model("User", UserSchema);
