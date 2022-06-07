const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserCart",
      },
    ],
  })
);

const UserCart = mongoose.model(
  "UserCart",
  new mongoose.Schema({
    userId: String,
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserProducts",
      },
    ],
  })
);

const UserProducts = mongoose.model(
  "UserProducts",
  new mongoose.Schema({
    productId: String,
  })
);

module.exports = { User, UserCart, UserProducts };
