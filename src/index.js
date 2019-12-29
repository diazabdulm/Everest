import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import store from "./redux";

import App from "./components/App";

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <CssBaseline />
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);
