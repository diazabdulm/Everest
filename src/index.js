import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import { store, persistor, reactReduxFirebaseProps } from "./redux/root.module";

import App from "./components/app/app.component";

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
