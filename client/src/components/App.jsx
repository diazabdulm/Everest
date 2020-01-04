import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkUserSession } from "../redux/userSlice";

import PrivateRoute from "./PrivateRoute";

import TasksPage from "../pages/Tasks";
import LoginAndRegisterPage from "../pages/LoginAndRegister";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/login" component={LoginAndRegisterPage} />
      <PrivateRoute exact path="/:projectId" component={TasksPage} />
      <Redirect to="/all" />
    </Switch>
  );
}
