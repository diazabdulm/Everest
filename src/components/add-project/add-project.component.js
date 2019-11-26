import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

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
