import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListRounded as ListIcon } from "@material-ui/icons";

import { selectProjects } from "../redux/projectsSlice";

const ProjectList = () => {
  const projects = useSelector(selectProjects);

  return (
    <Fragment>
      {projects.map(({ id, name }) => (
        <ListItem button key={id} component={Link} to={`/projects/${id}`}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </Fragment>
  );
};

export default ProjectList;
