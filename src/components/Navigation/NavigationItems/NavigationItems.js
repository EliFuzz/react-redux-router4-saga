import React from "react";

import NavigationItem from "components/Navigation/NavigationItems/NavigationItem";

const NavigationItems = () => (
  <ul>
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
      <NavigationItem link="/about" exact>
      About
    </NavigationItem>
  </ul>
);

export default NavigationItems;
