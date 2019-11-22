import React from "react";
import { useSelector, useDispatch } from "react-redux";
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

import ProjectList from "../project-list/project-list.component";

import useStyles from "./sidebar.styles";

import { toggleDrawer } from "../../redux/drawer.module";

const Sidebar = () => {
  const drawerOpen = useSelector(state => state.drawer.open);
  const drawerWidth = useSelector(state => state.drawer.width);
  const dispatch = useDispatch();
  const classes = useStyles({ drawerWidth });
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
        <ProjectList />
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="list holder">
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={drawerOpen}
          onClose={() => dispatch(toggleDrawer())}
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

export default Sidebar;
