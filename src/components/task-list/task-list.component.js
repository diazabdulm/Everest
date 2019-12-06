import React from "react";
import { useDispatch } from 'react-redux'
import { IconButton, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Task from "../task/task.component";
import AddTask from "../add-task/add-task.component";

import { toggleDrawer } from "../../redux/drawer.module";

import useStyles from "./task-list.styles";

const TaskList = ({ projectName, projectId, tasks }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  if (!tasks) return null;

  return (
    <main className={classes.content}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        className={classes.menuButton}
        onClick={() => dispatch(toggleDrawer())}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" gutterBottom>
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
