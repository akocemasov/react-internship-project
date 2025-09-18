const db = require("../models");
const Partners = db.partners;

exports.postPartners = (req, res) => {
  const query = { alt: req.body.alt };
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Partners.findOneAndUpdate(query, doc, options)
    .exec()
    .then((json) => {
      res
        .status(200)
        .send({ message: `Partner ${json.alt} was updated successfully!` });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getPartners = (req, res) => {
  const query = {};
  Partners.find(query)
    .exec()
    .then((json) => {
      res.status(200).send(json);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
