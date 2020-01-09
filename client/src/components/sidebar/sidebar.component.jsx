import React from "react";
import { useTheme, Drawer, Hidden, SwipeableDrawer } from "@material-ui/core";

import { iOS } from "../../constants/misc";

import { default as CustomDrawer } from "../drawer/drawer.component";

import useStyles from "./sidebar.styles";

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="list holder">
      <Hidden smUp implementation="js">
        <SwipeableDrawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          disableDiscovery={iOS}
          open={drawerOpen}
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
          onClick={toggleDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <CustomDrawer />
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <CustomDrawer />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
