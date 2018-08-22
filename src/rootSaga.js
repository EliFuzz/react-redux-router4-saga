import { all } from "redux-saga/effects";

import watchCounter from "Pages/Home/utils/sagas";
import watchTitle from "Pages/AboutUs/utils/sagas";

export default function* rootSaga() {
  yield all([watchCounter(), watchTitle()]);
}
