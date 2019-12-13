import React, { Fragment } from "react";

import Task from "./ProjectTask";

const ProjectTaskList = ({ tasks }) => {
  return (
    <Fragment>
      {tasks.map(({ id, ...otherProps }) => (
        <Task key={id} id={id} {...otherProps} />
      ))}
    </Fragment>
  );
};

export default ProjectTaskList;
