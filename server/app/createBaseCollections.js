const db = require("./models");
const {
  logo,
  contacts,
  partners,
  navlist,
  navlistSub,
  topslider,
  products,
  productsSub,
  footer,
  footerSub,
} = require("./constants").default;
const Role = db.role;
const Logo = db.logo;
const Contacts = db.contacts;
const Partners = db.partners;
const Navlist = db.navlist;
const NavlistSub = db.navlistSub;
const Topslider = db.topslider;
const Products = db.products;
const ProductsSub = db.productsSub;
const Footer = db.footer;
const FooterSub = db.footerSub;

const createRolesTable = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Role.create([{ name: "user" }, { name: "moderator" }, { name: "admin" }])
        .then(() => {
          console.log("Successfully added roles collection");
        })
        .catch((err) => {
          console.log("error adding roles collection", err);
        });
    }
  });
};

const createLogosTable = () => {
  Logo.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Logo.create(logo)
        .then(() => {
          console.log("Successfully added logos collection");
        })
        .catch((err) => {
          console.log("error adding logos collection", err);
        });
    }
  });
};

const createContactsTable = () => {
  Contacts.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Contacts.create(contacts)
        .then(() => {
          console.log("Successfully added contacts collection");
        })
        .catch((err) => {
          console.log("error adding contacts collection", err);
        });
    }
  });
};

const createPartnersTable = () => {
  Partners.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Partners.create(partners)
        .then(() => {
          console.log("Successfully added partners collection");
        })
        .catch((err) => {
          console.log("error adding partners collection", err);
        });
    }
  });
};

const createNavlistTable = () => {
  Navlist.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Navlist.create(navlist)
        .then(() => {
          console.log("Successfully added navlist collection");
        })
        .catch((err) => {
          console.log("error adding navlist collection", err);
        });
    }
  });

  NavlistSub.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      NavlistSub.create(navlistSub)
        .then(() => {
          console.log("Successfully added navlistSub collection");
          const query = {};
          Navlist.find(query)
            .exec()
            .then((items) => {
              items.forEach(async (item) => {
                await Navlist.findByIdAndUpdate(
                  item._id,
                  {
                    $push: {
                      subMenu: await NavlistSub.find({
                        type: item.title,
                      }),
                    },
                  },
                  { new: true, useFindAndModify: false }
                );
              });
            })
            .catch((err) => {
              console.log("error finding navlistSub item", err);
            });
        })
        .catch((err) => {
          console.log("error adding navlistSub collection", err);
        });
    }
  });
};

const createTopsliderTable = () => {
  Topslider.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Topslider.create(topslider)
        .then(() => {
          console.log("Successfully added topsliders collection");
        })
        .catch((err) => {
          console.log("error adding topsliders collection", err);
        });
    }
  });
};

const createProductsTable = () => {
  Products.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Products.create(products)
        .then(() => {
          console.log("Successfully added products collection");
        })
        .catch((err) => {
          console.log("error adding products collection", err);
        });
    }
  });

  ProductsSub.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      ProductsSub.create(productsSub)
        .then(() => {
          console.log("Successfully added productsSub collection");
          const query = {};
          Products.find(query)
            .exec()
            .then((items) => {
              items.forEach(async (item) => {
                await Products.findByIdAndUpdate(
                  item._id,
                  {
                    $push: {
                      subMenu: await ProductsSub.find({
                        type: item.title,
                      }),
                    },
                  },
                  { new: true, useFindAndModify: false }
                );
              });
            })
            .catch((err) => {
              console.log("error finding productsSub item", err);
            });
        })
        .catch((err) => {
          console.log("error adding productsSub collection", err);
        });
    }
  });
};

const createFooterTable = () => {
  Footer.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Footer.create(footer)
        .then(() => {
          console.log("Successfully added footers collection");
        })
        .catch((err) => {
          console.log("error adding footers collection", err);
        });
    }
  });

  FooterSub.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      FooterSub.create(footerSub)
        .then(() => {
          console.log("Successfully added footerSub collection");
          const query = {};
          Footer.find(query)
            .exec()
            .then((items) => {
              items.forEach(async (item) => {
                await Footer.findByIdAndUpdate(
                  item._id,
                  {
                    $push: {
                      subMenu: await FooterSub.find({
                        type: item.title,
                      }),
                    },
                  },
                  { new: true, useFindAndModify: false }
                );
              });
            })
            .catch((err) => {
              console.log("error finding footerSub item", err);
            });
        })
        .catch((err) => {
          console.log("error adding footerSub collection", err);
        });
    }
  });
};

module.exports = {
  createRolesTable,
  createLogosTable,
  createContactsTable,
  createPartnersTable,
  createNavlistTable,
  createTopsliderTable,
  createProductsTable,
  createFooterTable,
};
