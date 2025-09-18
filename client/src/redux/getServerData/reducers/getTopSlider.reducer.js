// update the state of the application in response to actions

import { GET_TOP_SLIDER } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getTopSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_SLIDER:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getTopSliderReducer;
