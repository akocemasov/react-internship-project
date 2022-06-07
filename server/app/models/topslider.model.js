const mongoose = require("mongoose");

const Topslider = mongoose.model(
  "Topslider",
  new mongoose.Schema({
    src: String,
    alt: String,
    href: String
  })
);

module.exports = Topslider;
