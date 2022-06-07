const db = require("../models");
const UserCart = db.userCart;
const ProductsSub = db.productsSub;

exports.postCart = (req, res) => {
  if (req.body.userId && req.body.products) {
    UserCart.findOne({ userId: req.body.userId }).exec((err, cart) => {
      if (err) {
        res.status(500).send({ err: true, message: err });
        return;
      }
      cart.products = [...cart.products, ...req.body.products];
      cart.save((err, json) => {
        if (err) {
          res.status(500).send({ err: true, message: err });
          return;
        }
        ProductsSub.find({ _id: { $in: json.products } }).exec(
          (err, products) => {
            if (err) {
              res.status(500).send({ err: true, message: err });
              return;
            }
            // console.log(products);
            res.status(200).send({ err: false, message: products });  // send full products
          }
        );
      });
    });
  }
};

// exports.getCart = (req, res) => {
//   const query = { userId: req.body.userId };
//   UserCart.findOne(query)
//     .populate("products", "-__v")
//     .exec()
//     .then((json) => {
//       if (json) {
//         res.status(200).send(json);
//       } else {
//         res.status(404).send({ message: "UserCart not found." });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err });
//     });
// };

exports.deleteCart = (req, res) => {
  if (req.body.userId) {
    UserCart.findOne({ userId: req.body.userId }).exec((err, cart) => {
      if (err) {
        res.status(500).send({ err: true, message: err });
        return;
      }
      cart.products = [];
      cart.save((err, json) => {
        if (err) {
          res.status(500).send({ err: true, message: err });
          return;
        }
        // console.log(json);
        res.status(200).send({ err: false, message: json });
      });
    });
  }
};
