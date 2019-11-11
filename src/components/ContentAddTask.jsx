import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ContentAddTask = () => {
  const classes = useStyles();

  return (
    <Fab aria-label="Add Task" color="secondary" className={classes.fab}>
      <AddIcon />
    </Fab>
  );
};

export default ContentAddTask;
