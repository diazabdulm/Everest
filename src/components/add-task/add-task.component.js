import React, { useState } from "react";
import v4 from 'uuid/v4'
import { useDispatch } from "react-redux";
import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useFirestore } from "react-redux-firebase";
import TextField from "@material-ui/core/TextField";

import useStyles from "./add-task.styles";

import { addTaskAsync } from "../../redux/tasks.module";

const AddTask = ({ projectId }) => {
  const [name, setName] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const firestore = useFirestore();

  const addTodo = () => null;

  const handleChange = event => setName(event.target.value);

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      const data = { id: v4(), name, projectId }
      alert(name)
    }
  }

  const handleAddTask = () => {
    const text = window.prompt(`What's the name of the task?`);
    if (!text) return;
    dispatch(addTaskAsync(text, projectId));
  };

  return (
    <TextField
      id="outlined-basic"
      label="Add Task"
      variant="filled"
      fullWidth
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default AddTask;
