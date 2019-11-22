import React from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./add-task.styles";

import { addTask } from "../../redux/tasks.module";

const AddTask = ({ addTask, projectId }) => {
  const classes = useStyles();

  const handleAddTask = () => {
    const text = window.prompt(`What's the name of the task?`);
    if (!text) return;

    addTask({ text, projectId });
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

const mapDispatchToProps = { addTask };

export default connect(null, mapDispatchToProps)(AddTask);
