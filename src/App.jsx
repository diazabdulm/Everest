import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import { checkUserSession } from "./redux/userSlice";

import SignInAndSignUpPage from "./views/SignInAndSignUpPage";
import TasksPage from "./views/Tasks";

const useStyles = makeStyles(theme => ({
  root: {
	display: "flex",
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
      <PublicRoute exact path="/" component={SignInAndSignUpPage} />
      {/* <PrivateRoute path="/projects/:projectId" component={TasksPage} /> */}
    </div>
  );
};

export default App;
