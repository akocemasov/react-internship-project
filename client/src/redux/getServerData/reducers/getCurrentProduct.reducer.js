// update the state of the application in response to actions

import { GET_CURRENT_PRODUCT } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getCurrentProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRODUCT:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getCurrentProductReducer;
