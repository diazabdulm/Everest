import { makeStyles } from "@material-ui/core";

import { DRAWER_WIDTH } from "../../constants/misc";

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    }
  },
  menu: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  }
}));

export default useStyles;
