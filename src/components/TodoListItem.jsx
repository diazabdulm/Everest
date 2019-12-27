import React from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import { deleteTask } from "../redux/tasksSlice";

import formatDate from "../common/formatDate";

const TodoListItem = ({ id, name, date }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      dense
      button
      disableGutters
      onClick={() => dispatch(deleteTask(id))}
      divider
    >
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

export default TodoListItem;
