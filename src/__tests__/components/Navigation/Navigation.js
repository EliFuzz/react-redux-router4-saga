import React from "react";
import { shallow } from "enzyme";

import Navigation from "components/Navigation/Navigation";

describe("<Navigation />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
