import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	makeStyles,
	Typography,
	TextField,
	Button,
	Link
} from "@material-ui/core";

import { signInWithEmail } from "../redux/userSlice";

const useStyles = makeStyles(theme => ({
	button: {
		marginTop: theme.spacing(3)
	},
	link: {
		display: "block",
		margin: theme.spacing(3, 0)
	}
}));

const SignIn = ({ toggleSignIn }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: ""
	});
	const dispatch = useDispatch();
	const classes = useStyles();

	const { email, password } = userCredentials;

	const handleChange = event => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(signInWithEmail(email, password));
	};

	useEffect(() => {
		setCredentials({
			email: "testaccount@example.com",
			password: "testpassword"
		});
	}, []);

	return (
		<Fragment>
			<Typography variant="h5">Sign In</Typography>
			<form onSubmit={handleSubmit}>
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
					value={email}
					onChange={handleChange}
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
					autoComplete="current-password"
					value={password}
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					color="primary"
					type="submit"
					fullWidth
					className={classes.button}
				>
					Sign In
				</Button>
				<Link
					variant="body2"
					href="#"
					align="center"
					className={classes.link}
					onClick={toggleSignIn}
				>
					Don't have an account? Sign Up
				</Link>
			</form>
		</Fragment>
	);
};

export default SignIn;
