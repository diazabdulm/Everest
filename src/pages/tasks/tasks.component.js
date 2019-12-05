import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";

import Header from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import {
  AllTasks,
  TodayTasks,
  WeekTasks,
  InboxTasks,
  ProjectTasks
} from "../../components/filters/filters.component";

import useStyles from "./tasks.styles";

const TasksPage = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const userId = useSelector(state => state.firebase.auth.uid);

  useFirestoreConnect([
    {
      collection: "projects",
      where: ["userId", "==", userId]
    }
  ]);

  return (
    <div className={classes.container}>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path={`${path}/all`} component={AllTasks} />
        <Route exact path={`${path}/today`} component={TodayTasks} />
        <Route exact path={`${path}/week`} component={WeekTasks} />
        <Route exact path={`${path}/inbox`} component={InboxTasks} />
        <Route exact path={`${path}/:projectId`} component={ProjectTasks} />
      </Switch>
    </div>
  );
};

export default TasksPage;
