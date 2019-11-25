import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Header from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import TaskList from "../../components/task-list/task-list.component";
import { AllTasks, TodayTasks, WeekTasks, ProjectTasks } from "../../components/filters/filters.component";

const TasksPage = ({ match }) => {
  const projectId = match.params.id;

  console.log(`${match.path}/all`)

  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path={`${match.path}/all`} component={AllTasks} />
        <Route exact path={`${match.path}/today`} component={TodayTasks} />
        <Route exact path={`${match.path}/week`} component={WeekTasks} />
        <Route exact path={`${match.path}/:id`} component={ProjectTasks} />
      </Switch>
    </div>
  );
};

export default withRouter(TasksPage);
