import React from "react";
import { shallow } from "enzyme";

import NavigationItem from "components/Navigation/NavigationItems/NavigationItem/NavigationItem";

describe("<NavigationItem />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItem />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
