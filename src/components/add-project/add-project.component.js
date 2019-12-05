import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
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

const AddProject = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const firestore = useFirestore();
  const userId = useSelector(state => state.firebase.auth.uid);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  const handleNameChange = event => setName(event.target.value);

  const handleProjectAdd = () => {
    return firestore
      .collection("projects")
      .add({
        userId,
        name: name.trim(),
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => handleClose())
      .catch(() => alert("An error occurred. Please try again later."));
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
