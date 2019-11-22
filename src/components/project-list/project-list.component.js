import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { addProject } from "../../redux/projects.module";

const createNewProjectData = () => {
  const text = window.prompt(`What's the new project's name?`);
  if (!text) return;

  return text.trim();
};

const ProjectList = () => {
  const [open, setOpen] = React.useState(true);
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

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
          {projects.map(({ id, text }) => (
            <ListItem button key={id} component={Link} to={`/project/${id}`}>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => dispatch(addProject(createNewProjectData()))}
          >
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

export default ProjectList;
