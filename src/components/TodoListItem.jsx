import React from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import { removeTask } from "../redux/tasksSlice";

import formatDate from "../common/formatDate";

const TodoListItem = ({ id, name, date }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => dispatch(removeTask(id));

  return (
    <ListItem dense button disableGutters onClick={handleRemoveTask} divider>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={false}
          disableRipple
          inputProps={{ "aria-labelledby": name }}
        />
      </ListItemIcon>
      <ListItemText primary={name} secondary={date && formatDate(date)} />
    </ListItem>
  );
};

export default TodoListItem;
