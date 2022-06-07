const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  })
    .exec()
    .then((user) => {
      if (user) {
        res
          .status(400)
          .send({ err: true, message: "Failed! Username is already in use!" });
        return;
      }

      User.findOne({
        email: req.body.email,
      })
        .exec()
        .then((user) => {
          if (user) {
            res
              .status(400)
              .send({ err: true, message: "Failed! Email is already in use!" });
            return;
          }
          next();
        })
        .catch((err) => {
          res.status(500).send({ err: true, message: err });
        });
    })
    .catch((err) => {
      res.status(500).send({ err: true, message: err });
    });
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res
          .status(400)
          .send({
            err: true,
            message: `Failed! Role ${req.body.roles[i]} does not exist!`,
          });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
