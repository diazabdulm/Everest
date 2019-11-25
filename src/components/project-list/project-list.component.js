import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ListIcon from "@material-ui/icons/List";

const ProjectList = () => {
  const projects = useSelector(state => state.projects);

  return (
    <Fragment>
      {projects.map(({ id, text }) => (
        <ListItem button key={id} component={Link} to={`/projects/${id}`}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </Fragment>
  );
};

export default ProjectList;
