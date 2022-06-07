const mongoose = require("mongoose");

const Partners = mongoose.model(
  "Partners",
  new mongoose.Schema({
    src: String,
    alt: String,
    href: String
  })
);

module.exports = Partners;
