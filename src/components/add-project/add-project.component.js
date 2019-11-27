import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
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
import { Add as AddIcon } from "@material-ui/icons";

import { addProject } from "../../redux/projects.module";

const AddProject = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  const handleNameChange = event => setName(event.target.value);

  const handleProjectAdd = () => {
    setName(name.trim())
    console.log(name)
    dispatch(addProject(name));
    handleClose();
  };

  return (
    <Fragment>
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Project" />
      </ListItem>
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
            value={name}
            type="text"
            fullWidth
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleProjectAdd}
            color="primary"
            disabled={!name.trim()}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AddProject;
