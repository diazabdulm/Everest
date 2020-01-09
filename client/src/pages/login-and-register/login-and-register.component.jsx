import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Avatar,
  Button,
  Container,
  Divider,
  Link,
  Typography
} from "@material-ui/core";
import { LockOutlined as LockIcon } from "@material-ui/icons";

import { selectCurrentUser } from "../../redux/userSlice";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Copyright from "../../components/copyright/copyright.component";

import { signInWithGoogle } from "../../redux/userSlice";

import useStyles from "./login-and-register.styles";

export default function LoginAndRegisterPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(selectCurrentUser);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleIsSignIn = () => setIsSignIn(!isSignIn);

  if (auth) return <Redirect to="/all" />;

  return (
    <Container maxWidth="xs">
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        {isSignIn ? (
          <SignIn toggleSignIn={handleIsSignIn} />
        ) : (
          <SignUp toggleSignIn={handleIsSignIn} />
        )}
        <Typography align="center">OR</Typography>
        <Button
          variant="outlined"
          onClick={() => dispatch(signInWithGoogle())}
          className={classes.button}
          fullWidth
        >
          Sign In With Google
        </Button>
        <Divider />
        {isSignIn ? (
          <Link
            variant="body2"
            href="#"
            align="center"
            className={classes.link}
            onClick={handleIsSignIn}
          >
            Don't have an account? Sign Up
          </Link>
        ) : (
          <Link
            variant="body2"
            href="#"
            align="center"
            className={classes.link}
            onClick={handleIsSignIn}
          >
            Already have an account? Sign in
          </Link>
        )}
        <Divider />
        <Copyright />
        <Divider />
      </div>
    </Container>
  );
}
