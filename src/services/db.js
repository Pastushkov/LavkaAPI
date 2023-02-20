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
      let admin = await User.findOne({ type: "superAdmin" });
      if (!admin) {
        admin = new User({
          name: "superAdmin",
          phone: "superAdmin",
          email: "superAdmin",
          password: await bcrypt.hash("1NyOlAp153FZ", 10),
          type: "superAdmin",
        });
        await admin.save();
      }
      console.log("DB connected successfully");
    }
  });
};

module.exports = initDB;
