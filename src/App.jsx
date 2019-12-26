import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

import PrivateRoute from "./components/PrivateRoute";

import { checkUserSession } from "./redux/userSlice";

import SignInAndSignUpPage from "./views/SignInAndSignUp";
import TasksPage from "./views/Tasks";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={SignInAndSignUpPage} />
        <PrivateRoute path="/projects/:projectId" component={TasksPage} />
      </Switch>
    </div>
  );
};

export default App;
