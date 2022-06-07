// update the state of the application in response to actions

import { TO_CART, CLEAR_CART, DELETE_CART } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const updateCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TO_CART:
      //      console.log("TO_CART=", action.payload);
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    case DELETE_CART:
      return initialState;
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default updateCartReducer;
