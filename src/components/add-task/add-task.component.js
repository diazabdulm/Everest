import React from "react";
import { useDispatch } from "react-redux";
import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import useStyles from "./add-task.styles";

import { addTask } from "../../redux/tasks.module";

const AddTask = ({ projectId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const text = window.prompt(`What's the name of the task?`);
    if (!text) return;
    dispatch(addTask({ text, projectId }));
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
