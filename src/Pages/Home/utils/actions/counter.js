import * as actionTypes from "Pages/Home/utils/actionTypes";

export const reset = () => ({
  type: actionTypes.RESET
});

export const increment = () => ({
  type: actionTypes.INCREMENT
});

export const decrement = () => ({
  type: actionTypes.DECREMENT
});
