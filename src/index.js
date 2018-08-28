import React from "react";
import { render } from "react-dom";

// router
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import registerServiceWorker from "registerServiceWorker";

import "index.css";
import App from "App";

render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
