import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./add-task.styles";

import { addTask } from "../../redux/tasksSlice";

/* 
	if currently selected filter belongs to a user-made project,
	add tasks to it. Otherwise add to inbox project
*/
const setCurrentProject = (projectId, filter) => {
  switch (filter) {
    case "SHOW_USER_PROJECT":
      return projectId;
    default:
      return "inbox";
  }
};

export default function AddTask() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { projectId } = useParams();
  const [formValue, setFormValue] = useState("");
  const currentProject = useSelector(state =>
    setCurrentProject(projectId, state.visibilityFilter)
  );

  const handleFormValueChange = event => setFormValue(event.target.value);

  const handleFormSubmit = event => {
    if (!formValue.trim()) return;

    if (event.key === "Enter") {
      dispatch(addTask({ name: formValue, projectId: currentProject }));
      setFormValue("");
    }
  };

  return (
    <TextField
      variant="filled"
      placeholder="Add a task, press Enter to save"
      fullWidth
      onChange={handleFormValueChange}
      onKeyPress={handleFormSubmit}
      value={formValue}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input
        }
      }}
      className={classes.textField}
    />
  );
}
