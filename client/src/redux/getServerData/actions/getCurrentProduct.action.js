import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_CURRENT_PRODUCT } from "../../action.types";

export const getCurrentProduct = (id) => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "GET",
      `${dbName}/get/products/${id}`
    );
    dispatch({
      type: GET_CURRENT_PRODUCT,
      payload: response,
    });
  };
};
