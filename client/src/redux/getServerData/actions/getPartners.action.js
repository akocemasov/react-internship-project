import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_PARTNERS } from "../../action.types";

export const getPartners = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request("GET", `${dbName}/get/partners`);
    dispatch({ type: GET_PARTNERS, payload: response });
  };
};
