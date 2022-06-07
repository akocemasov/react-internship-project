const controller = require("../controllers/logo.controller");
const dbConfig = require("../config/db.config");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(`/api/${dbConfig.DBNAME}/post/logo`, controller.postLogo);

  app.get(`/api/${dbConfig.DBNAME}/get/logo`, controller.getLogo);  // TODO: add verify

};
