import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl } from "../../../globals/globals";

import { SIGN_UP } from "../../action.types";

export const signUp = (user) => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "POST",
      "auth/signup",
      {},
      JSON.stringify(user)
    );
    dispatch({
      type: SIGN_UP,
      payload: response,
    });
  };
};
