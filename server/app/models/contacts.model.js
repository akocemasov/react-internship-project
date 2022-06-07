const mongoose = require("mongoose");

const Contacts = mongoose.model(
  "Contacts",
  new mongoose.Schema({
    city: String,
    telefone: String,
    href: String
  })
);

module.exports = Contacts;
