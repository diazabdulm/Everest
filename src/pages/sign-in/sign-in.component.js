import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";

import { signInWithGoogle } from "../../redux/user.module";

import useStyles from "./sign-in.styles";

const SignInPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<LockIcon />}
        onClick={() => dispatch(signInWithGoogle())}
      >
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignInPage;
