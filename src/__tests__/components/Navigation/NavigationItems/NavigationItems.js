import React from "react";
import { shallow } from "enzyme";

import NavigationItems from "components/Navigation/NavigationItems/NavigationItems";

describe("<NavigationItems />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
