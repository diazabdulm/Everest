import React from "react";

import InboxIcon from "@material-ui/icons/InboxTwoTone";
import TodayIcon from "@material-ui/icons/TodayTwoTone";
import WeekIcon from "@material-ui/icons/DateRange";

const directory = [
  { id: 0, name: "Inbox", icon: <InboxIcon />, color: "#246fe0" },
  { id: 1, name: "Today", icon: <TodayIcon />, color: "#058527" },
  { id: 2, name: "Next 7 Days", icon: <WeekIcon />, color: "#692fc2" }
];

export default directory;
