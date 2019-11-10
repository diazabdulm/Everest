import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CircleIcon from "@material-ui/icons/FiberManualRecord";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SidebarAddProject from "../add-project";

const SidebarProjects = ({ projects }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {projects.map(({ id, title }) => (
            <ListItem button key={id}>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
          <SidebarAddProject />
        </List>
      </Collapse>
    </Fragment>
  );
};

const mapStateToProps = ({ projects }) => ({
  projects: projects.collection
});

export default connect(mapStateToProps)(SidebarProjects);
