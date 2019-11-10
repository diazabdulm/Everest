import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

import { toggleDrawer } from "../../redux/ducks/drawer.duck";

import useStyles from "./header.styles";

const Header = ({ currentUser, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Everest
        </Typography>
        {currentUser ? (
          <Button color="inherit">Log Out</Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
