import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import useStyles from "./header.styles";

const Header = ({ currentUser }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.logo}>
          <Logo />
        </div>
        {currentUser ? (
          <IconButton
            color="inherit"
            aria-label="log out"
            className={classes.icon}
          >
            <LogoutIcon />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="log in"
            edge="end"
            className={classes.icon}
          >
            <LoginIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
