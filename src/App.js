import React, { Component } from "react";

import Layout from "hoc/layout/layout";
import Routes from "routes";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
