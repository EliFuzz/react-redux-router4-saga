import React from "react";
import { shallow } from "enzyme";

import HomePage from "Pages/Home/Components/Page";

describe("<HomePage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
