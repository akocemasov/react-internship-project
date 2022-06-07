import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_NAVLIST } from "../../action.types";

export const getNavlist = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request("GET", `${dbName}/get/navlist`);
    dispatch({ type: GET_NAVLIST, payload: response });
  };
};
