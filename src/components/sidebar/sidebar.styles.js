import { makeStyles } from "@material-ui/core/styles";

import drawerWidth from "../../constants/drawerWidth";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

export default useStyles;
