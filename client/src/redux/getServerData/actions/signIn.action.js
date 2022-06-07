import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl } from "../../../globals/globals";

import { SIGN_IN } from "../../action.types";

export const signIn = (user) => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request(
      "POST",
      "auth/signin",
      {},
      JSON.stringify(user)
    );
    dispatch({
      type: SIGN_IN,
      payload: response,
    });
  };
};
