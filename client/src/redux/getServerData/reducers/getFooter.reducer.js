// update the state of the application in response to actions

import { GET_FOOTER } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getFooterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOTER:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getFooterReducer;
