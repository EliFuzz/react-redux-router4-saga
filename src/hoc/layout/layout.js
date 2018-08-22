import React, { Component } from "react";

import "index.css";

import Aux from "../aux/aux";
import Navigation from "components/Navigation";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <main>{this.props.children}</main>
        <footer />
      </Aux>
    );
  }
}

export default Layout;
