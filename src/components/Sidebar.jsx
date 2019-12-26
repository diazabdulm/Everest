import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Divider,
  Drawer,
  Hidden,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import {
  ExitToApp as SignOutIcon,
  InboxRounded as InboxIcon,
  AllInboxRounded as AllIcon,
  EventRounded as TodayIcon,
  DateRangeRounded as WeekIcon
} from "@material-ui/icons";

import { selectDisplayName } from "../redux/userSlice";

import getInitials from "../common/getInitials";

import ProjectList from "./SidebarProjectList";
import AddProject from "./SidebarAddProject";

const drawerWidth = 240;

const directory = [
  {
    id: 0,
    name: "All",
    icon: <AllIcon />,
    linkUrl: "all"
  },
  {
    id: 1,
    name: "Today",
    icon: <TodayIcon />,
    linkUrl: "today"
  },
  {
    id: 2,
    name: "Next 7 Days",
    icon: <WeekIcon />,
    linkUrl: "week"
  },
  {
    id: 3,
    name: "Inbox",
    icon: <InboxIcon />,
    linkUrl: "inbox"
  }
];

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    background: theme.palette.grey.A400
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
  const displayName = useSelector(selectDisplayName);
  const [nameInitials, setNameInitials] = useState("");
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    const initials = getInitials(displayName);
    setNameInitials(initials);
  }, [displayName]);

  const drawer = (
    <div onClick={toggleDrawer}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{nameInitials}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={displayName} />
          <SignOutIcon />
        </ListItem>
        {directory.map(({ id, name, icon, linkUrl }) => (
          <ListItem
            button
            key={id}
            component={Link}
            to={`/projects/${linkUrl}`}
            onClick={toggleDrawer}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
      <List>
        <ProjectList />
        <AddProject />
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
          onClose={toggleDrawer}
          onClick={toggleDrawer}
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
      <Hidden xsDown implementation="js">
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
