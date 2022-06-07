const mongoose = require("mongoose");

const Logo = mongoose.model(
  "Logo",
  new mongoose.Schema({
    src: String,
    alt: String,
    href: String
  })
);

module.exports = Logo;
