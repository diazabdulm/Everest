import React from "react";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import { removeTask } from "../../redux/tasks.module";

const Task = ({ id, text, removeTask }) => (
  <ListItem dense button disableGutters onClick={() => removeTask(id)}>
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

const mapDispatchToProps = { removeTask };

export default connect(null, mapDispatchToProps)(Task);
