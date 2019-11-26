import React, { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";

import PublicRoute from '../public-route/public-route.component'
import PrivateRoute from "../private-route/private-route.component";

import SignInPage from "../../pages/sign-in/sign-in.component";
import TasksPage from "../../pages/tasks/tasks.component";

import { isUserAuthenticated } from "../../redux/user.module";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserAuthenticated());
  }, [dispatch]);

  return (
    <Fragment>
      <PublicRoute exact path="/" component={SignInPage} />
      <PrivateRoute path="/projects" component={TasksPage} />
    </Fragment>
  );
};

export default App;
