import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import { MenuRounded, DeleteForever } from "@material-ui/icons";

import { DRAWER_WIDTH } from "../constants/misc";

import {
  deleteProject,
  selectCurrentProjectName
} from "../redux/projectsSlice";

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    }
  },
  menu: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  }
}));

const getCurrentProjectName = (state, projectId, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return "All";
    case "SHOW_TODAY":
      return "Today";
    case "SHOW_WEEK":
      return "Week";
    case "SHOW_INBOX":
      return "Inbox";
    case "SHOW_USER_PROJECT":
      return selectCurrentProjectName(state, projectId);
  }
};

export default function ProjectHeader({ toggleDrawer }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { projectId } = useParams();
  const currentFilter = useSelector(state => state.visibilityFilter);
  const currentProjectName = useSelector(state =>
    getCurrentProjectName(state, projectId, currentFilter)
  );

  const handleProjectDelete = () => {
    history.push("/projects/all");
    dispatch(deleteProject(projectId));
  };

  return (
    <AppBar color="inherit" position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menu}
          onClick={toggleDrawer}
        >
          <MenuRounded />
        </IconButton>
        <Typography noWrap variant="h6" className={classes.title}>
          {currentProjectName}
        </Typography>
        {currentFilter === "SHOW_USER_PROJECT" && (
          <Tooltip title="Delete Project">
            <IconButton
              color="inherit"
              aria-label="delete project"
              edge="end"
              className={classes.delete}
              onClick={handleProjectDelete}
            >
              <DeleteForever />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
}
