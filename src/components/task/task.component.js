import React from "react";
import { useDispatch } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import { removeTask } from "../../redux/tasks.module";

const Task = ({ id, text }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      dense
      button
      disableGutters
      onClick={() => dispatch(removeTask(id))}
    >
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
