// update the state of the application in response to actions

import { GET_NAVLIST } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getNavlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAVLIST:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getNavlistReducer;
