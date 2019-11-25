import React from "react";
import { useDispatch } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";

import { addProject } from "../../redux/projects.module";

const createNewProjectData = () => {
  const text = window.prompt(`What's the new project's name?`);
  if (!text) return;
  return text.trim();
};

const AddProject = () => {
  const dispatch = useDispatch();
  return (
    <ListItem
      button
      onClick={() => dispatch(addProject(createNewProjectData()))}
    >
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Project" />
    </ListItem>
  );
};

export default AddProject;
