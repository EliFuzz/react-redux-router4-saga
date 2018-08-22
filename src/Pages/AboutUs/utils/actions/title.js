import * as actionTypes from "Pages/AboutUs/utils/actionTypes";

export const fetchTitle = () => ({
  type: actionTypes.FETCH_TITLE
});

export const setTitle = name => ({
  type: actionTypes.SET_TITLE,
  name
});
