import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FilterLink from "../filter-link/filter-link.component";

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
          to={`/${id}`}
        />
      ))}
    </Fragment>
  );
}
