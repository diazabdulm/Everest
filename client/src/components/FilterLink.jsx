import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListRounded } from "@material-ui/icons";

import { setVisibilityFilter } from "../redux/visibilityFilterSlice";

export default function FilterLink({
  filter,
  name,
  icon: Icon = ListRounded,
  ...otherProps
}) {
  const dispatch = useDispatch();

  return (
    <ListItem
      button
      onClick={() => dispatch(setVisibilityFilter(filter))}
      {...otherProps}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
}
