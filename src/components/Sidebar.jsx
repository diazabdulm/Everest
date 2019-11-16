import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import InboxIcon from "@material-ui/icons/InboxTwoTone";
import EventIcon from "@material-ui/icons/EventTwoTone";
import DateRangeIcon from "@material-ui/icons/DateRangeTwoTone";

import SidebarProjectList from "./SidebarProjectList";

import { toggleDrawer, selectDrawerState } from "../redux/drawer.module";

import drawerWidth from "../common/drawerWidth";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

const Sidebar = ({ addProject, drawerState, toggleDrawer, projects }) => {
  const classes = useStyles();
  const theme = useTheme();

  const directory = [
    {
      id: 0,
      name: "Inbox",
      icon: <InboxIcon />
    },
    {
      id: 1,
      name: "Today",
      icon: <EventIcon />
    },
    {
      id: 2,
      name: "Next 7 Days",
      icon: <DateRangeIcon />
    }
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {directory.map(({ id, name, icon }) => (
          <ListItem button key={id}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
        <SidebarProjectList />
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="list holder">
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={drawerState}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  drawerState: selectDrawerState
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
