import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

import { addTask } from "../redux/tasks.module";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ContentAddTask = ({ addTask }) => {
  const classes = useStyles();

  const handleAddTask = () => {
    const name = window.prompt(`What's the name of the task?`);
    if (!name) return;

    const id = uuid.v4();
    addTask({ name, id });
  };

  return (
    <Fab
      aria-label="Add Task"
      color="secondary"
      className={classes.fab}
      onClick={handleAddTask}
    >
      <AddIcon />
    </Fab>
  );
};

const mapDispatchToProps = dispatch => ({
  addTask: taskData => dispatch(addTask(taskData))
});

export default connect(
  null,
  mapDispatchToProps
)(ContentAddTask);
