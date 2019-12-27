import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useFirestore } from "react-redux-firebase";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { AddCircle as AddIcon } from "@material-ui/icons";

import { addProject } from "../redux/projectsSlice";

const AddProject = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isTextEmpty, setIsTextEmpty] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsTextEmpty(!name.trim());
  }, [name]);

  const handleDialogOpen = () => setOpen(true);

  const handleDialogClose = () => {
    setName("");
    setOpen(false);
  };

  const handleNameChange = event => setName(event.target.value);

  const handleProjectAdd = () => {
    dispatch(addProject(name));
    handleDialogClose();
  };

  return (
    <Fragment>
      <ListItem button onClick={handleDialogOpen}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Project" />
      </ListItem>
      <Dialog
        open={open}
        onClose={handleDialogClose}
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
            value={name}
            type="text"
            fullWidth
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleProjectAdd}
            color="primary"
            disabled={isTextEmpty}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AddProject;
