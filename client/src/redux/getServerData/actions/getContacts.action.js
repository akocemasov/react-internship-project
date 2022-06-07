import getFetchApi from "../../../fetchJsonApi";
import { jsonServerUrl, dbName } from "../../../globals/globals";

import { GET_CONTACTS } from "../../action.types";

export const getContacts = () => {
  return async (dispatch) => {
    const response = await getFetchApi(jsonServerUrl).request("GET", `${dbName}/get/contacts`);
    dispatch({ type: GET_CONTACTS, payload: response });
  };
};
