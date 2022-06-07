import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { DELETE_CART } from "../../action.types";

export const deleteCart = (cart) => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "DELETE",
      `${dbName}/delete/cart`,
      {},
      JSON.stringify(cart)
    );
    dispatch({
      type: DELETE_CART,
      payload: response,
    });
  };
};
