import React, { useState } from "react";
import chrono from "chrono-node";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { useFirestore } from "react-redux-firebase";
import { makeStyles, TextField } from "@material-ui/core";

import { addTask } from "../redux/tasksSlice";

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(2)
  },
  input: {
    padding: theme.spacing(2),
    borderRadius: "4px"
  }
}));

const TodoListAddForm = () => {
  const { projectId } = useParams();
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNameChange = event => setName(event.target.value);

  const handleTaskAdd = event => {
    if (event.key === "Enter") {
      dispatch(addTask({ name, projectId }))
      setName("");
    }
  };

  return (
    <TextField
      variant="filled"
      placeholder="Add a task..."
      fullWidth
      onChange={handleNameChange}
      onKeyPress={handleTaskAdd}
      value={name}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input
        }
      }}
      className={classes.textField}
    />
  );
};

export default TodoListAddForm;
