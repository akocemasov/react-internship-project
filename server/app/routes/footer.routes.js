const controller = require("../controllers/footer.controller");
const dbConfig = require("../config/db.config");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(`/api/${dbConfig.DBNAME}/post/footer`, controller.postFooter);

  app.get(`/api/${dbConfig.DBNAME}/get/footer`, controller.getFooter);  // TODO: add verify

};
