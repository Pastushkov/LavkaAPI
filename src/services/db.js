const User = require("../models/user");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const initDB = async (dbUrl) => {
  mongoose.set("strictQuery", true);
  mongoose.connect(dbUrl, {}, async (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log("DB connected successfully");
    }
  });
};

module.exports = initDB;
