const db = require("../models");
const Navlist = db.navlist;

exports.postNavlist = (req, res) => {
  const query = { title: req.body.title };
  const doc = JSON.parse(JSON.stringify(req.body));
  const options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  };
  Navlist.findOneAndUpdate(query, doc, options)
    .exec()
    .then((json) => {
      res
        .status(200)
        .send({ message: `Navlist item ${json.title} was updated successfully!` });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.getNavlist = (req, res) => {
  const query = {};
  Navlist.find(query).populate("subMenu", "-__v")
    .exec()
    .then((json) => {
      if (json) {
        res.status(200).send(json);
      } else {
        res.status(404).send({ message: "Navlist not found." });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
