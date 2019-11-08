import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";

import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

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
            <IconButton aria-label="Log Out" edge="end" color="inherit">
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Log In">
            <IconButton
              aria-label="Log In"
              component={Link}
              to="/login"
              edge="end"
              color="inherit"
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
