import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AddIcon from "@material-ui/icons/Add";

import { addProject } from "../redux/projects.module";

const SidebarAddProject = ({ addProject }) => {
  const handleAddProject = () => {
    const name = window.prompt(`What's the name of the project?`).trim();

    if (name) {
      const id = uuid.v4();
      const linkUrl = `/projects/${encodeURIComponent(name)}`;

      addProject({ name, id, linkUrl });
    }
  };

  return (
    <ListItem button onClick={handleAddProject}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Project" />
    </ListItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addProject: projectData => dispatch(addProject(projectData))
});

export default connect(
  null,
  mapDispatchToProps
)(SidebarAddProject);
