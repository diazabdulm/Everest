import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { setUser } from "../../redux/user.module";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    signInWithGoogle()
      .then(user => {
        dispatch(setUser(user));
      })
      .catch(error => console.log);
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      Sign in With Google
    </Button>
  );
};

export default withRouter(SignIn);
