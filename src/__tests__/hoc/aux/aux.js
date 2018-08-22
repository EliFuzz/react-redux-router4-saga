import React from "react";
import { shallow } from "enzyme";

import Aux from "hoc/aux/aux";

describe("<Aux />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Aux />);
    });

    afterEach(() => {
        wrapper = null;
    });

    it("renders without crashing", () => {
        expect(wrapper).toHaveLength(1);
    });
});
