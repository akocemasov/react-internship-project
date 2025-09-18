const mongoose = require("mongoose");

const Navlist = mongoose.model(
  "Navlist",
  new mongoose.Schema({
    title: String,
    href: String,
    subMenu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NavlistSub",
      },
    ],
  })
);

const NavlistSub = mongoose.model(
  "NavlistSub",
  new mongoose.Schema({
    type: String,
    title: String,
  })
);

module.exports = {Navlist, NavlistSub};
