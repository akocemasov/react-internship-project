// update the state of the application in response to actions

import { UPDATE_LOGIN } from "../../action.types";

const initialState = {
  exist: false,
};

const updateLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return {
        ...state,
        exist: action.payload,
      };
    default:
      return state;
  }
};

export default updateLoginReducer;
