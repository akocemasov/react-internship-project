import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_TOP_SLIDER } from "../../action.types";

export const getTopSlider = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request("GET", `${dbName}/get/topslider`);
    dispatch({ type: GET_TOP_SLIDER, payload: response });
  };
};
