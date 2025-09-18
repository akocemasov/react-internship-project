const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const UserCart = db.userCart;
const UserProducts = db.userProducts;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save(async (err, user) => {
    if (err) {
      res.status(500).send({ err: true, message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ err: true, message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ err: true, message: err });
              return;
            }

            res.send({
              err: false,
              message: "User was registered successfully!",
            });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ err: true, message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ err: true, message: err });
            return;
          }

          const userCart = new UserCart({
            userId: user._id,
            products: [],
          });
          userCart.save((err) => {
            if (err) {
              res.status(500).send({ err: true, message: err });
              return;
            }
          });

          res.send({
            err: false,
            message: "User was registered successfully!",
          });
        });
      });
    }

    console.log("User signed up: ", user.username);
  });
};

exports.signin = (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    res.status(404).send({ err: true, message: "Failed! Fill the form." });
    return;
  }

  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .populate("cart", "-__v")
    .exec()
    .then((user) => {
      if (!user) {
        console.log("user not found");
        res
          .status(404)
          .send({ err: true, message: "Failed! Username not found." });
        return;
      }

      const emailIsValid = req.body.email === user.email ? true : false;

      if (!emailIsValid) {
        res.status(401).send({ err: true, message: "Failed! Invalid Email." });
        return;
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        res
          .status(401)
          .send({ err: true, message: "Failed! Invalid Password." });
        return;
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      UserCart.findOne({ userId: user._id })
        .exec((err, json) => {
          if (err) {
            res.status(500).send({ err: true, message: err });
            return;
          }
          res.status(200).send({
            err: false,
            message: {
              id: user._id,
              username: user.username,
              email: user.email,
              roles: authorities,
              cart: json,
              accessToken: token,
            },
          });
        });
    })
    .catch((err) => {
      res.status(500).send({ err: true, message: err });
    });
};
