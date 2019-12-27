import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import {
  MenuRounded as MenuIcon,
  DeleteForever as DeleteIcon
} from "@material-ui/icons";

import { deleteProject, selectCurrentProjectName } from "../redux/projectsSlice";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  deleteButton: {
    position: "absolute",
    right: 0
  }
}));

const TodoListHeader = ({ toggleDrawer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { projectId } = useParams();
  const projectName = useSelector(state => selectCurrentProjectName(state, projectId))

  return (
    <div className={classes.header}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        className={classes.menuButton}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5">{projectName}</Typography>
      <IconButton
        color="inherit"
        aria-label="delete project"
        edge="end"
        className={classes.deleteButton}
        onClick={() => dispatch(deleteProject(projectId))}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoListHeader;
