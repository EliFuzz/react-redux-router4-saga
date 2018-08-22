import reducer from "Pages/AboutUs/utils/reducers/title";
import * as actionTypes from "Pages/AboutUs/utils/actionTypes";

describe("counter reducer", () => {
  const INITIAL_STATE = {
    name: ""
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it(`should handle ${actionTypes.INCREMENT}`, () => {
    expect(
      reducer(undefined, { type: actionTypes.SET_TITLE, name: "Test" })
    ).toEqual({
      name: "Test"
    });
  });
});
