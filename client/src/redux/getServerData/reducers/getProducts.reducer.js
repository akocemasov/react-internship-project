// update the state of the application in response to actions

import { GET_PRODUCTS } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getProductsReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getProductsReducer;
