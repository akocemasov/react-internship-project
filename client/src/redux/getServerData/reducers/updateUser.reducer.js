// update the state of the application in response to actions

import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      // console.log("SIGN_IN: ", action.payload);
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    case SIGN_UP:
      // console.log("SIGN_UP: ", action.payload);
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    case SIGN_OUT:
      // console.log("SIGN_OUT");
      return initialState;
    default:
      return state;
  }
};

export default updateUserReducer;
