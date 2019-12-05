import React from "react";
import { Typography } from "@material-ui/core";

import Task from "../task/task.component";
import AddTask from "../add-task/add-task.component";

import useStyles from "./task-list.styles";

const TaskList = ({ projectName, projectId, tasks }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography variant="h6" gutterBottom className={classes.title}>
        {projectName}
      </Typography>
      <AddTask projectId={projectId} />
      {tasks.map(({ id, ...otherProps }) => (
        <Task key={id} id={id} {...otherProps} />
      ))}
    </main>
  );
};

export default TaskList;
