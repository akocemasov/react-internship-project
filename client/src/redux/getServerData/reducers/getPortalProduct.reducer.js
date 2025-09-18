// update the state of the application in response to actions

import { GET_PORTAL_PRODUCT } from "../../action.types";

const initialState = {
  payload: {},
  open: false,
};

const getPortalProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTAL_PRODUCT:
      return {
        ...state,
        payload: action.payload,
        open: action.open,
      };
    default:
      return state;
  }
};

export default getPortalProductReducer;
