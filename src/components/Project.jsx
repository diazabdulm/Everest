import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core";

import Header from "./ProjectHeader";
import AddTask from "./ProjectAddTask";
import TaskList from "./ProjectTaskList";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Project = ({ id, name, tasks, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Header projectName={name} toggleDrawer={toggleDrawer} />
      <AddTask projectId={id} />
      <TaskList tasks={tasks} />
    </main>
  );
};

export default Project;
