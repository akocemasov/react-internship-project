import { UPDATE_LOGIN } from "../../action.types";

export const updateLogin = (exist) => {
  return {
    type: UPDATE_LOGIN,
    payload: exist,
  };
};
