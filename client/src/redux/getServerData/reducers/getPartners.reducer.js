// update the state of the application in response to actions

import { GET_PARTNERS } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getPartnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNERS:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getPartnersReducer;
