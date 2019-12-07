import React, { Fragment } from "react";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import SignInPage from "./views/SignIn";
import TasksPage from "./views/Tasks";

const App = () => (
  <Fragment>
    <PublicRoute exact path="/" component={SignInPage} />
    <PrivateRoute path="/projects" component={TasksPage} />
  </Fragment>
);

export default App;
