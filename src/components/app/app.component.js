import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

import PublicRoute from "../public-route/public-route.component";
import PrivateRoute from "../private-route/private-route.component";

import SignInPage from "../../pages/sign-in/sign-in.component";
import TasksPage from "../../pages/tasks/tasks.component";

const App = () => {
  const auth = useSelector(state => state.firebase.auth);
  const userId = useSelector(state => state.firebase.auth.uid);
  const name = "Capt. Janeway";

  if (isLoaded(auth)) {
  }
  // sync redux with firebase data automatically
  useFirestoreConnect([
    {
      collection: "projects",
      where: ["userId", "==", "pugvLISPU6YNoKPRk9r44QpF9la2"]
    },
    {
      collection: "tasks",
      where: ["userId", "==", "pugvLISPU6YNoKPRk9r44QpF9la2"]
    }
  ]);

  return (
    <Fragment>
      <PublicRoute exact path="/" component={SignInPage} />
      <PrivateRoute path="/projects" component={TasksPage} />
    </Fragment>
  );
};

export default App;
