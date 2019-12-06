import React from "react";
import { useFirestore } from "react-redux-firebase";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const Task = ({ id, name }) => {
  const firestore = useFirestore();

  const removeTask = () =>
    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => null)
      .catch(() => alert("Task could not be deleted. Please try again later"));

  return (
    <ListItem dense button disableGutters onClick={removeTask}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={false}
          disableRipple
          inputProps={{ "aria-labelledby": name }}
        />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default Task;
