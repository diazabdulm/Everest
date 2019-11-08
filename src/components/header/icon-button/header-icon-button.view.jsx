import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const HeaderIconButton = ({ title, children, ...otherProps }) => (
  <Tooltip title={title}>
    <IconButton aria-label={title} edge="end" color="inherit" {...otherProps}>
      {children}
    </IconButton>
  </Tooltip>
);

export default HeaderIconButton;
