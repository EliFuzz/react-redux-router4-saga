import { combineReducers } from "redux";

import home from "Pages/Home/utils/reducers";
import aboutUs from "Pages/AboutUs/utils/reducers";

export default combineReducers({
  home,
  aboutUs
});
