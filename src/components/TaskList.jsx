import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import {
  MenuRounded as MenuIcon,
  MoreHoriz as MoreIcon
} from "@material-ui/icons";
import Task from "./TaskListTask";
import AddTask from "./TaskListAddTask";

import { toggleDrawer } from "../redux/drawerSlice";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  headerBar: {
    display: "flex",
    alignItems: "center"
  },
  projectActions: {
    flex: 1
  }
}));

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
