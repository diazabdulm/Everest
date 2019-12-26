import React from "react";
import { makeStyles, IconButton, Typography } from "@material-ui/core";
import {
  MenuRounded as MenuIcon,
  DeleteForever as DeleteIcon
} from "@material-ui/icons";

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
  projectActions: {
    position: "absolute",
    right: 0
  }
}));

const TodoListHeader = ({ projectName, toggleDrawer }) => {
  const classes = useStyles();

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
        className={classes.projectActions}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoListHeader;
