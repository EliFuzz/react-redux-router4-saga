import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Pages/Home";
import AboutUs from "Pages/AboutUs";

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={AboutUs} />
  </Switch>
);

export default routes;
