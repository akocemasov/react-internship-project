import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_FOOTER } from "../../action.types";

export const getFooter = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "GET",
      `${dbName}/get/footer`
    );
    dispatch({ type: GET_FOOTER, payload: response });
  };
};
