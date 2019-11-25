import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AllInboxIcon from "@material-ui/icons/AllInboxTwoTone";
import EventIcon from "@material-ui/icons/EventTwoTone";
import DateRangeIcon from "@material-ui/icons/DateRangeTwoTone";

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
      icon: <AllInboxIcon />,
      linkUrl: "all"
    },
    {
      id: 1,
      name: "Today",
      icon: <EventIcon />,
      linkUrl: "today"
    },
    {
      id: 2,
      name: "Next 7 Days",
      icon: <DateRangeIcon />,
      linkUrl: "week"
    }
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
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
