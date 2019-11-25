import React from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Task from "../task/task.component";
import AddTask from "../add-task/add-task.component";

import useStyles from "./task-list.styles";

const TaskList = ({ projectName, projectId, tasks }) => {
  const classes = useStyles();

  console.log(projectName, projectId, tasks)

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom className={classes.title}>
        {projectName}
      </Typography>
      {tasks.map(({ id, ...otherProps }) => (
        <Task key={id} id={id} {...otherProps} />
      ))}
      <AddTask projectId={projectId} />
    </main>
  );
};

export default withRouter(TaskList);
