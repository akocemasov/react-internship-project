const mongoose = require("mongoose");

// const Products = mongoose.model(
//   "Products",
//   new mongoose.Schema({
//     type: String,
//     src: String,
//     title: String,
//     price: Number,
//     currency: String,
//   })
// );

const Products = mongoose.model(
  "Products",
  new mongoose.Schema({
    title: String,
    subMenu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductsSub",
      },
    ],
  })
);
const ProductsSub = mongoose.model(
  "ProductsSub",
  new mongoose.Schema({
    type: String,
    src: String,
    title: String,
    price: Number,
    currency: String,
  })
);

module.exports = { Products, ProductsSub };
