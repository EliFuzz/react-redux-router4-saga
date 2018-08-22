import * as actionTypes from "Pages/AboutUs/utils/actionTypes";

const INITIAL_STATE = {
  name: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
