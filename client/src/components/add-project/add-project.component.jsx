import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { addProject } from "../../redux/projectsSlice";

export default function AddProject({ open, handleClose }) {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState("");

  const handleFormValueChange = event => setFormValue(event.target.value);

  const handleFormSubmit = () => {
    if (!formValue.trim()) return;

    dispatch(addProject(formValue));
    setFormValue("");
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          autoComplete="off"
          margin="dense"
          id="name"
          label="Name"
          value={formValue}
          type="text"
          fullWidth
          onChange={handleFormValueChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleFormSubmit}
          disabled={!formValue.trim()}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
