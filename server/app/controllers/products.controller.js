const db = require("../models");
const Products = db.products;

exports.postProducts = (req, res) => {
  const query = { type: req.body.type };
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Products.findOneAndUpdate(query, doc, options)
    .exec()
    .then((json) => {
      res
        .status(200)
        .send({ message: `Products item ${json.title} was updated successfully!` });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getProducts = (req, res) => {
  const query = {};
  Products.find(query).populate("subMenu", "-__v")
    .exec()
    .then((json) => {
      if (json) {
        res.status(200).send(json);
      } else {
        res.status(404).send({ message: "Products not found." });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

// exports.getProductsByType = (req, res) => {
//   const query = {type: req.params.type};
//   Products.find(query)
//     .exec()
//     .then((json) => {
//       res.status(200).send(json);
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err });
//     });
// };