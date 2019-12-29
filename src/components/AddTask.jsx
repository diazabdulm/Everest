import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { addTask } from "../redux/tasksSlice";

const useStyles = makeStyles(theme => ({
	textField: {
		marginBottom: theme.spacing(2)
	},
	input: {
		padding: theme.spacing(2)
	}
}));

export default function AddTask() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [formValue, setFormValue] = useState("");

	const handleFormValueChange = event => setFormValue(event.target.value);

	const handleFormSubmit = event => {
		if (!formValue.trim()) return;

		if (event.key === "Enter") {
			dispatch(addTask(formValue));
			setFormValue("");
		}
	};

	return (
		<TextField
			variant="filled"
			placeholder="Add a task..."
			fullWidth
			onChange={handleFormValueChange}
			onKeyPress={handleFormSubmit}
			value={formValue}
			InputProps={{
				disableUnderline: true,
				classes: {
					input: classes.input
				}
			}}
			className={classes.textField}
		/>
	);
}
