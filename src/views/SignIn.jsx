import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";
import { useFirebase } from "react-redux-firebase";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

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
