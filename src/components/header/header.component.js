import React from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { toggleDrawer } from "../../redux/drawer.module";
import { beginSignOut } from "../../redux/user.module";

import useStyles from "./header.styles";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
        <Button
          color="inherit"
          startIcon={<ExitToAppIcon />}
          onClick={() => dispatch(beginSignOut())}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
