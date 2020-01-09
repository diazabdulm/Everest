import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Avatar as AvatarCircle,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

import getInitials from "../../common/getInitials";

import { selectDisplayName, signOut } from "../../redux/userSlice";

const useStyles = makeStyles(theme => ({
  circle: {
    background: theme.palette.primary.light
  }
}));

export default function Avatar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userName = useSelector(selectDisplayName);

  return (
    <ListItem>
      <ListItemAvatar>
        <AvatarCircle className={classes.circle}>
          {getInitials(userName)}
        </AvatarCircle>
      </ListItemAvatar>
      <ListItemText primary={userName} />
      <ExitToApp onClick={() => dispatch(signOut())} />
    </ListItem>
  );
}
