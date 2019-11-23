import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import { toggleDrawer } from "../../redux/drawer.module";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import useStyles from "./header.styles";

const Header = () => {
  const classes = useStyles();
  const isUser = useSelector(state => state.user);
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
        {isUser ? (
          <Button color="inherit" onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button color="inherit" onClick={signInWithGoogle}>
            Sign in With Google
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
