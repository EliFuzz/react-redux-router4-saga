import React from "react";
import { shallow } from "enzyme";

import Layout from "hoc/layout/layout";

describe("<Layout />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    afterEach(() => {
        wrapper = null;
    });

    it("renders without crashing", () => {
        expect(wrapper).toHaveLength(1);
    });
});
