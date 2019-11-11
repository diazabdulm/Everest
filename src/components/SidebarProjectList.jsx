import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CircleIcon from "@material-ui/icons/FiberManualRecord";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { toggleDrawer } from "../redux/drawer.module";
import { selectProjects } from "../redux/projects.module";
import SidebarAddProject from "./SidebarAddProject";

const SidebarProjectList = ({ projects, toggleDrawer }) => {
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
          {projects.map(({ id, linkUrl, name }) => (
            <ListItem
              button
              key={id}
              component={Link}
              to={linkUrl}
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          <SidebarAddProject />
        </List>
      </Collapse>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjects
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarProjectList);
