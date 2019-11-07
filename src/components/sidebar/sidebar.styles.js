import { makeStyles } from "@material-ui/core/styles";

import { drawerWidth } from "../../utils/theme";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderRight: "1px solid #f1f1f1",
    [theme.breakpoints.up("sm")]: {
      left: "auto",
      background: "transparent"
    }
  }
}));

export default useStyles;
