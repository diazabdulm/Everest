import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./add-task.styles";

import { addTask } from "../../redux/tasksSlice";

const setCurrentProject = (projectId, filter) => {
  if (filter === "SHOW_USER_PROJECT") return projectId;
  return "inbox";
};

export default function AddTask() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const currentProject = useSelector(state =>
    setCurrentProject(projectId, state.visibilityFilter)
  );

  const [formValue, setFormValue] = useState("");

  const handleFormSubmit = () => {
    if (!formValue.trim()) return;

    dispatch(addTask({ name: formValue, projectId: currentProject }));
    setFormValue("");
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      placeholder="Add a task, press Enter to save"
      value={formValue}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input
        }
      }}
      className={classes.textField}
      onChange={event => setFormValue(event.target.value)}
      onKeyPress={event => event.key === "Enter" && handleFormSubmit()}
    />
  );
}
