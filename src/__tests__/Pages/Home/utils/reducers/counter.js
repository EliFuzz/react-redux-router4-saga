import reducer from "Pages/Home/utils/reducers/counter";
import * as actionTypes from "Pages/Home/utils/actionTypes";

describe("counter reducer", () => {
  const INITIAL_STATE = {
    amount: 0
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it(`should handle ${actionTypes.INCREMENT}`, () => {
    expect(reducer(undefined, { type: actionTypes.INCREMENT })).toEqual({
      amount: 1
    });
  });

  it(`should handle ${actionTypes.DECREMENT}`, () => {
    expect(reducer(undefined, { type: actionTypes.DECREMENT })).toEqual({
      amount: -1
    });
  });

  it(`should handle ${actionTypes.RESET}`, () => {
    expect(reducer(undefined, { type: actionTypes.RESET })).toEqual(
      INITIAL_STATE
    );
  });
});
