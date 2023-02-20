const mongoose = require("mongoose");

const SoapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
  colors: {
    type: Object,
    default: {},
  },
});

module.exports = mongoose.model("Soap", SoapSchema);
