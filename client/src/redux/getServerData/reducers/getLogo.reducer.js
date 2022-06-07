// update the state of the application in response to actions

import { GET_LOGO } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getLogoReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case GET_LOGO:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getLogoReducer;
