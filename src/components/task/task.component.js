import React from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

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
