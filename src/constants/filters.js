import {
  ExitToApp as SignOutIcon,
  InboxRounded as InboxIcon,
  AllInboxRounded as AllIcon,
  EventRounded as TodayIcon,
  DateRangeRounded as WeekIcon
} from "@material-ui/icons";

const directory = [
  {
    id: 0,
    name: "All",
    icon: <AllIcon />,
    linkUrl: "all"
  },
  {
    id: 1,
    name: "Today",
    icon: <TodayIcon />,
    linkUrl: "today"
  },
  {
    id: 2,
    name: "Next 7 Days",
    icon: <WeekIcon />,
    linkUrl: "week"
  },
  {
    id: 3,
    name: "Inbox",
    icon: <InboxIcon />,
    linkUrl: "inbox"
  }
];

export default directory;
