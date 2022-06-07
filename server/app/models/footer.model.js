const mongoose = require("mongoose");

const Footer = mongoose.model(
  "Footer",
  new mongoose.Schema({
    title: String,
    subMenu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FooterSub",
      },
    ],
  })
);

const FooterSub = mongoose.model(
  "FooterSub",
  new mongoose.Schema({
    type: String,
    name: String,
    href: String,
  })
);

module.exports = { Footer, FooterSub };
