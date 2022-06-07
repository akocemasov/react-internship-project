const controller = require("../controllers/products.controller");
const dbConfig = require("../config/db.config");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(`/api/${dbConfig.DBNAME}/post/products`, controller.postProducts);
  app.get(`/api/${dbConfig.DBNAME}/get/products`, controller.getProducts); // TODO: add verify
  // app.get(`/api/${dbConfig.DBNAME}/get/products/:type`, controller.getProductsByType); // TODO: add verify
};
