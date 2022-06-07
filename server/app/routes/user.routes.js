const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const dbConfig = require("../config/db.config");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(`/api/${dbConfig.DBNAME}/all`, controller.allAccess);

  app.get(
    `/api/${dbConfig.DBNAME}/user`,
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    `/api/${dbConfig.DBNAME}/mod`,
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    `/api/${dbConfig.DBNAME}/admin`,
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
