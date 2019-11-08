import React from "react";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CircleIcon from "@material-ui/icons/FiberManualRecord";
import InboxIcon from "@material-ui/icons/InboxTwoTone";
import TodayIcon from "@material-ui/icons/TodayTwoTone";
import WeekIcon from "@material-ui/icons/DateRange";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./sidebar-drawer.styles";

const SidebarDrawer = ({ defaultProjectsTitles, userProjectsTitles }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(defaultProjectsTitles);

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {defaultProjectsTitles.map(({ id, name, icon }) => (
          <ListItem button key={id}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <Divider />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default SidebarDrawer;
