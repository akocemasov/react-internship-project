const db = require("../models");
const dbConfig = require("../config/db.config");
const Logo = db.logo;

exports.postLogo = (req, res) => {
  const query = {};
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Logo.findOneAndUpdate(query, doc, options)
    .exec()
    .then(() => {
      res.status(200).send({ message: "Logo was updated successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getLogo = (req, res) => {
  const query = {};
  Logo.find(query)
    .exec()
    .then((json) => {
      res.status(200).send(json);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
