import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_PRODUCTS } from "../../action.types";

export const getProducts = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request("GET", `${dbName}/get/products`);
    dispatch({ type: GET_PRODUCTS, payload: response });
  };
};
