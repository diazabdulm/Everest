import React, { Fragment, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, Button } from "@material-ui/core";

import { signInWithGoogle, signInWithEmail } from "../redux/userSlice";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const googleSignInStart = useCallback(() => dispatch(signInWithGoogle()), [
    dispatch
  ]);

  const { email, password } = userCredentials;

  handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    dispatch(signInWithEmail({ email, password }));
  };

  return (
    <Fragment>
      <Typography component="h1">Sign In</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
        <Button variant="outlined" type="button" onClick={googleSignInStart}>
          Sign In With Google
        </Button>
      </form>
    </Fragment>
  );
};

export default SignIn;
