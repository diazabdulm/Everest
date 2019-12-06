import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
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

import ProjectList from "../project-list/project-list.component";
import AddProject from "../add-project/add-project.component";

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

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>A{/* <ImageIcon /> */}</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Abdul Diaz" />
          <SignOutIcon />
        </ListItem>
        {directory.map(({ id, name, icon, linkUrl }) => (
          <ListItem
            button
            key={id}
            component={Link}
            to={`/projects/${linkUrl}`}
            onClick={() => dispatch(toggleDrawer())}
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
