const db = require("../models");
const Contacts = db.contacts;

exports.postContacts = (req, res) => {
  const query = { city: req.body.city };
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Contacts.findOneAndUpdate(query, doc, options)
    .exec()
    .then((json) => {
      res
        .status(200)
        .send({ message: `Contact ${json.city} was updated successfully!` });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getContacts = (req, res) => {
  const query = {};
  Contacts.find(query)
    .exec()
    .then((json) => {
      res.status(200).send(json);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
