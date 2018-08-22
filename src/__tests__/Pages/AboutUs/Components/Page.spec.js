import React from "react";
import { shallow } from "enzyme";

import AboutUsPage from "Pages/AboutUs/Components/Page";

describe("<AboutUsPage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutUsPage />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
