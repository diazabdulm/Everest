import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

import { store, persistor, reactReduxFirebaseProps } from "./redux/root.module";

import App from "./components/app/app.component";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </MuiThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
