import { combineReducers } from "redux";

import getLogoReducer from "./getServerData/reducers/getLogo.reducer";
import getContactsReducer from "./getServerData/reducers/getContacts.reducer";
import getPartnersReducer from "./getServerData/reducers/getPartners.reducer";
import getNavlistReducer from "./getServerData/reducers/getNavlist.reducer";
import getTopSliderReducer from "./getServerData/reducers/getTopSlider.reducer";
import getProductsReducer from "./getServerData/reducers/getProducts.reducer";
import getCurrentProductReducer from "./getServerData/reducers/getCurrentProduct.reducer";
import getFooterReducer from "./getServerData/reducers/getFooter.reducer";
import getPortalProductReducer from "./getServerData/reducers/getPortalProduct.reducer";
import updateUserReducer from "./getServerData/reducers/updateUser.reducer";

import updateLoginReducer from "./Login/reducers/updateLogin.reducer";

import updateCartReducer from "./Cart/reducers/updateCart.reducer";

// When an action is dispatched, it is received by the root reducer of the application and is passed on to all the reducers

const rootReducer = combineReducers({
  logo: getLogoReducer,
  contacts: getContactsReducer,
  partners: getPartnersReducer,
  navlist: getNavlistReducer,
  topSlider: getTopSliderReducer,
  products: getProductsReducer,
  currentProduct: getCurrentProductReducer,
  footer: getFooterReducer,
  portalProduct: getPortalProductReducer,
  user: updateUserReducer,

  login: updateLoginReducer,

  cart: updateCartReducer,
});

export default rootReducer;
