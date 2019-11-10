import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../header";
import Sidebar from "../sidebar";

import HomePage from "../../pages/home";

const App = () => (
  <Fragment>
    <Header />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Fragment>
);

export default App;
