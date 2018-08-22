import React from "react";
import { shallow } from "enzyme";

import Routes from "routes";

describe("<Routes />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
