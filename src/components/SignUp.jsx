import React, { Fragment, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Link
} from "@material-ui/core";

import { signUp } from "../redux/userSlice";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3)
  },
  link: {
    display: "block",
    margin: theme.spacing(3, 0)
  }
}));

const SignUp = ({ toggleSignIn }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(signUp(displayName, email, password));
  };

  return (
    <Fragment>
      <Typography variant="h5">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          inputProps={{ spellCheck: "false" }}
          onChange={handleChange}
          value={displayName}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          inputProps={{ spellCheck: "false" }}
          onChange={handleChange}
          value={email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          onChange={handleChange}
          value={password}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="confirm-password"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          className={classes.button}
        >
          Sign Up
        </Button>
        <Link
          variant="body2"
          href="#"
          align="center"
          className={classes.link}
          onClick={toggleSignIn}
        >
          Already have an account? Sign in
        </Link>
      </form>
    </Fragment>
  );
};

export default SignUp;
