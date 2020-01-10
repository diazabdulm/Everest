import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./redux/userSlice";

import PrivateRoute from "./components/private-route/private-route.component";

import TasksPage from "./pages/tasks/tasks.component";
import LoginAndRegisterPage from "./pages/login-and-register/login-and-register.component";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginAndRegisterPage} />
        <PrivateRoute exact path="/:projectId" component={TasksPage} />
        <Redirect to="/all" />
      </Switch>
    </BrowserRouter>
  );
}
