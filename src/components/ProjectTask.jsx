import React, { useEffect, useState } from "react";
import moment from "moment";
// import { useFirestore } from "react-redux-firebase";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import formatDate from "../common/formatDate";

const ProjectTask = ({ id, name, date }) => {
  const [formattedDate, setFormattedDate] = useState("");
  // const firestore = useFirestore();

  useEffect(() => {
    setFormattedDate(formatDate(date));
  }, [date]);

  const removeTask = () => null;
    // firestore
    //   .collection("tasks")
    //   .doc(id)
    //   .delete()
    //   .then(() => null)
    //   .catch(() => alert("Task could not be deleted. Please try again later"));

  return (
    <ListItem dense button disableGutters onClick={removeTask} divider>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={false}
          disableRipple
          inputProps={{ "aria-labelledby": name }}
        />
      </ListItemIcon>
      <ListItemText primary={name} secondary={formattedDate} />
    </ListItem>
  );
};

export default ProjectTask;
