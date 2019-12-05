import React from "react";
import { Button } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";
import { useFirebase } from "react-redux-firebase";

import useStyles from "./sign-in.styles";

const SignInPage = () => {
  const classes = useStyles();
  const firebase = useFirebase();

  const signInWithGoogle = () =>
    firebase.login({ provider: "google", type: "popup" });

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<LockIcon />}
        onClick={signInWithGoogle}
      >
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignInPage;
