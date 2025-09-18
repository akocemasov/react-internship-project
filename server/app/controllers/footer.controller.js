const db = require("../models");
const Footer = db.footer;

exports.postFooter = (req, res) => {
  const query = { title: req.body.title };
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Footer.findOneAndUpdate(query, doc, options)
    .exec()
    .then((json) => {
      res
        .status(200)
        .send({ message: `Footer item ${json.title} was updated successfully!` });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getFooter = (req, res) => {
  const query = {};
  Footer.find(query).populate("subMenu", "-__v")
    .exec()
    .then((json) => {
      if (json) {
        res.status(200).send(json);
      } else {
        res.status(404).send({ message: "Footer not found." });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
