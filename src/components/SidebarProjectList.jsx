import React, { Fragment } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CircleIcon from "@material-ui/icons/FiberManualRecord";

import { addProject, selectProjectList } from "../redux/projects.module";

const createNewProjectData = () => {
  const name = window.prompt(`What's the new project's name?`);
  if (!name) return;

  return { name, tasks: [] };
};

const SidebarProjectList = ({ projects, addProject }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {projects.map(({ id, name }) => (
            <ListItem button key={id} component={Link} to={`/project/${id}`}>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          <ListItem button onClick={() => addProject(createNewProjectData())}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Project" />
          </ListItem>
        </List>
      </Collapse>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjectList
});

const mapDispatchToProps = dispatch => ({
  addProject: projectData => dispatch(addProject(projectData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarProjectList);
