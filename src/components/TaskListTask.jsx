import React from "react";
import moment from "moment";
import { useFirestore } from "react-redux-firebase";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const Task = ({ id, name, date }) => {
  const firestore = useFirestore();

  const formatDate = (() =>
    date ? moment(date.toDate()).format("ddd, MMM D YYYY, h:mm A") : "")();

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
      <ListItemText primary={name} secondary={formatDate} />
    </ListItem>
  );
};

export default Task;
