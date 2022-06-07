import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_LOGO } from "../../action.types";

export const getLogo = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "GET",
      `${dbName}/get/logo`
    );
    dispatch({ type: GET_LOGO, payload: response });
  };
};
