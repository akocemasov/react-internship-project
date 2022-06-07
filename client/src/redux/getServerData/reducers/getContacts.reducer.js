// update the state of the application in response to actions

import { GET_CONTACTS } from "../../action.types";

const initialState = {
  payload: {},
  ready: false,
};

const getContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        payload: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};

export default getContactsReducer;
