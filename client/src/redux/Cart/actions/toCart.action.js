import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { TO_CART } from "../../action.types";

export const toCart = (cart) => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "POST",
      `${dbName}/post/cart`,
      {},
      JSON.stringify(cart)
    );
    dispatch({
      type: TO_CART,
      payload: response,
    });
  };
};
