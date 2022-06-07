const controller = require("../controllers/partners.controller");
const dbConfig = require("../config/db.config");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(`/api/${dbConfig.DBNAME}/post/partners`, controller.postPartners);

  app.get(`/api/${dbConfig.DBNAME}/get/partners`, controller.getPartners);  // TODO: add verify

};
