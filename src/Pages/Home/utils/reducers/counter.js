import * as actionTypes from "Pages/Home/utils/actionTypes";

const INITIAL_STATE = {
  amount: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        amount: state.amount + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        amount: state.amount - 1
      };
    case actionTypes.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
