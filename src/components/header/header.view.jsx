import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";

import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import useStyles from "./header.styles";

const Header = ({ currentUser }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
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
          <Tooltip title="Log Out">
            <IconButton
              color="inherit"
              aria-label="log out"
              className={classes.icon}
              component={Link}
              edge="end"
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Log In">
            <IconButton
              color="inherit"
              aria-label="log in"
              edge="end"
              className={classes.icon}
              component={Link}
              to="/login"
            >
              <LoginIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
