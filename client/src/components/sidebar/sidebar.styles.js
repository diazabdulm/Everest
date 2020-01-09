import { makeStyles } from "@material-ui/core";

import { DRAWER_WIDTH } from "../../constants/misc";

const useStyles = makeStyles(theme => ({
  drawer: {
    background: theme.palette.grey.A400,
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  drawerPaper: {
    background: theme.palette.grey[200],
    width: DRAWER_WIDTH
  }
}));

export default useStyles;
