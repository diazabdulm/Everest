import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

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
  const { path } = useRouteMatch();
  const classes = useStyles();

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
