import React, { Fragment } from "react";

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
