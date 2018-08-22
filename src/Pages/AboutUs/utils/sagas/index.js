import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "Pages/AboutUs/utils/actionTypes";

import fetchTitle from "Pages/AboutUs/utils/sagas/fetchTitle";

export default function*() {
  yield takeEvery(actionTypes.FETCH_TITLE, fetchTitle);
}
