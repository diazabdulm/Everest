import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { store, persistor } from "./redux";
import theme from "./common/theme";
import * as serviceWorker from "./serviceWorker.js";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
