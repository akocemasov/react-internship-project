const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model").User;
db.userCart = require("./user.model").UserCart;
db.userProducts = require("./user.model").UserProducts;
db.role = require("./role.model");
db.logo = require("./logo.model");
db.contacts = require("./contacts.model");
db.partners = require("./partners.model");
db.navlist = require("./navlist.model").Navlist;
db.navlistSub = require("./navlist.model").NavlistSub;
db.topslider = require("./topslider.model");
db.products = require("./products.model").Products;
db.productsSub = require("./products.model").ProductsSub;
db.footer = require("./footer.model").Footer;
db.footerSub = require("./footer.model").FooterSub;

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
