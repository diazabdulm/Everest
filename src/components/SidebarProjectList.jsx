import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import { isLoaded } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListRounded as ListIcon } from "@material-ui/icons";

const ProjectList = () => {
  // const projects = useSelector(state => state.firestore.ordered.projects);
  const projects = [];
  
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
