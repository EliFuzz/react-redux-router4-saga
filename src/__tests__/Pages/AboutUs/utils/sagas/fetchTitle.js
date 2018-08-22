import mockAxios from "axios";

import { call, put } from "redux-saga/effects";

import fetchTitle from "Pages/AboutUs/utils/sagas/fetchTitle";
import * as titleActions from "Pages/AboutUs/utils/actions/title";
import * as api from "Pages/AboutUs/utils/api";

describe("flow get a title", () => {
  it("should fetch a title", async () => {
    const set = { title: "test" };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(set));

    const gen = fetchTitle();
    expect(gen.next().value).toEqual(call(api.fetchTitle));
    expect(gen.next(set).value).toEqual(put(titleActions.setTitle(set.title)));
  });
});
