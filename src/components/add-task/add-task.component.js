import React from "react";
import chrono from "chrono-node";
import { useDispatch } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./add-task.styles";

import { beginAddTask } from "../../redux/tasks.module";

const AddTask = ({ projectId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const text = window.prompt(`What's the name of the task?`);
    if (!text) return;
    dispatch(beginAddTask({ text, projectId, date: chrono.parseDate(text) }));
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

export default AddTask;
