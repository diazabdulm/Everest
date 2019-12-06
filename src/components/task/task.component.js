import React from "react";
import { useFirestore } from "react-redux-firebase";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const Task = ({ id, text }) => {
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
          inputProps={{ "aria-labelledby": text }}
        />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default Task;
