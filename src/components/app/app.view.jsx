import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import NotFoundPage from "../../pages/not-found";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
