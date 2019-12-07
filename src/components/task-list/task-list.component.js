import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, Typography } from "@material-ui/core";
import { MenuRounded as MenuIcon, MoreHoriz as MoreIcon } from "@material-ui/icons";
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
      <div className={classes.headerBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
          onClick={() => dispatch(toggleDrawer())}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">{projectName}</Typography>
        <IconButton
          color="inherit"
          aria-label="open project actions"
          edge="end"
          className={classes.projectActions}
        >
          <MoreIcon />
        </IconButton>
      </div>
      <AddTask projectId={projectId} />
      {tasks.map(({ id, ...otherProps }) => (
        <Task key={id} id={id} {...otherProps} />
      ))}
    </main>
  );
};

export default TaskList;
