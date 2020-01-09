import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  AddCircle,
  AllInboxRounded,
  EventRounded,
  DateRangeRounded,
  InboxRounded
} from "@material-ui/icons";

import Avatar from "../avatar/avatar.component";
import FilterLink from "../filter-link/filter-link.component";
import ProjectList from "../project-list/project-list.component";
import { default as AddProjectDialog } from "../add-project/add-project.component";

import useStyles from "./drawer.styles";

export default function Drawer() {
  const classes = useStyles();
  const [addProjectDialogOpen, setAddProjectDialogOpen] = useState(false);

  const toggleAddProjectDialog = () =>
    setAddProjectDialogOpen(!addProjectDialogOpen);

  return (
    <List>
      <Avatar />
      <FilterLink name="All" filter="SHOW_ALL" icon={AllInboxRounded} />
      <FilterLink name="Today" filter="SHOW_TODAY" icon={EventRounded} />
      <FilterLink name="Week" filter="SHOW_WEEK" icon={DateRangeRounded} />
      <FilterLink name="Inbox" filter="SHOW_INBOX" icon={InboxRounded} />
      <Divider variant="middle" className={classes.divider} />
      <ProjectList />
      <ListItem button onClick={toggleAddProjectDialog}>
        <ListItemIcon>
          <AddCircle />
        </ListItemIcon>
        <ListItemText primary="Add Project" />
      </ListItem>
      <AddProjectDialog
        open={addProjectDialogOpen}
        handleClose={toggleAddProjectDialog}
      />
    </List>
  );
}
