import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FilterLink from "./FilterLink";

export default function ProjectList() {
	const projects = useSelector(state => state.projects);

	return (
		<Fragment>
			{projects.map(({ id, name }) => (
				<FilterLink
					key={id}
					name={name}
					component={Link}
					filter="SHOW_USER_PROJECT"
					to={`/projects/${id}`}
				/>
			))}
		</Fragment>
	);
}
