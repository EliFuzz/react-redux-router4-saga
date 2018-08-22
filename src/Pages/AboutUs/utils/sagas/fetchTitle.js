import { call, put } from "redux-saga/effects";

import * as apis from "Pages/AboutUs/utils/api";

import * as titleActions from "Pages/AboutUs/utils/actions/title";

export default function*() {
  const { title } = yield call(apis.fetchTitle);
  yield put(titleActions.setTitle(title));
}
