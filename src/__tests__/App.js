import React from "react";
import { shallow } from "enzyme";

import App from "App";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
