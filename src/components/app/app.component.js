import React, { Fragment } from "react";

import PublicRoute from "../public-route/public-route.component";
import PrivateRoute from "../private-route/private-route.component";

import SignInPage from "../../pages/sign-in/sign-in.component";
import TasksPage from "../../pages/tasks/tasks.component";

const App = () => (
  <Fragment>
    <PublicRoute exact path="/" component={SignInPage} />
    <PrivateRoute path="/projects" component={TasksPage} />
  </Fragment>
);

export default App;
