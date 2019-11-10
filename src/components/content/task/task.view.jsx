import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const Task = ({ name }) => {
  return (
    <ListItem dense button>
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
