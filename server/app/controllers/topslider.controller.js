const db = require("../models");
const Topslider = db.topslider;

exports.postTopslider = (req, res) => {
  const query = { alt: req.body.alt };
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Topslider.findOneAndUpdate(query, doc, options)
    .exec()
    .then((json) => {
      res
        .status(200)
        .send({ message: `Topslider ${json.alt} was updated successfully!` });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getTopslider = (req, res) => {
  const query = {};
  Topslider.find(query)
    .exec()
    .then((json) => {
      res.status(200).send(json);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
