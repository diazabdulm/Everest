import React, { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Avatar,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import { LockOutlined as LockIcon } from "@material-ui/icons";

import { selectCurrentUser } from "../redux/userSlice";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Copyright from "../components/Copyright";

import { signInWithGoogle } from "../redux/userSlice";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(8, 0)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  button: { margin: theme.spacing(3, 0, 2) },
  textWithLineBehind: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    "&::before": {
      content: '""',
      display: "block",
      borderTop: `solid 2px ${theme.palette.grey[700]}`,
      width: "100%",
      height: "2px",
      position: "absolute",
      top: "50%",
      zIndex: "0"
    },
    "& span": {
      background: theme.palette.background.default,
      padding: theme.spacing(0, 2),
      position: "relative",
      zIndex: "1",
      textTransform: "uppercase"
    }
  }
}));

const SignInAndSignUpPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const googleSignInStart = useCallback(() => dispatch(signInWithGoogle()), [
    dispatch
  ]);
  const auth = useSelector(selectCurrentUser);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleIsSignIn = () => setIsSignIn(!isSignIn);

  if (auth) return <Redirect to="/projects" />;

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
        <Typography className={classes.textWithLineBehind}>
          <span>or</span>
        </Typography>
        <Button
          variant="outlined"
          onClick={googleSignInStart}
          className={classes.button}
          fullWidth
        >
          Sign In With Google
        </Button>
        <Copyright />
      </div>
    </Container>
  );
};

export default SignInAndSignUpPage;
