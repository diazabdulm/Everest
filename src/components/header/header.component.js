import React from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon
} from "@material-ui/icons";
import { useFirebase } from "react-redux-firebase";

import { toggleDrawer } from "../../redux/drawer.module";

import useStyles from "./header.styles";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const logout = () => firebase.logout();

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
          onClick={() => dispatch(toggleDrawer())}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Everest
        </Typography>
        <Button color="inherit" startIcon={<ExitToAppIcon />} onClick={logout}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
