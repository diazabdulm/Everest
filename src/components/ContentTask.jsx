import React from "react";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import { removeTask } from "../redux/tasks.module";

const ContentTask = ({ taskId, name, removeTask }) => (
  <ListItem dense button disableGutters onClick={() => removeTask(taskId)}>
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

const mapDispatchToProps = dispatch => ({
  removeTask: taskId => dispatch(removeTask(taskId))
});

export default connect(
  null,
  mapDispatchToProps
)(ContentTask);
