import { GET_PORTAL_PRODUCT } from "../../action.types";

export const getPortalProduct = (product, open) => {
  return {
    type: GET_PORTAL_PRODUCT,
    payload: product,
    open: open,
  };
};
