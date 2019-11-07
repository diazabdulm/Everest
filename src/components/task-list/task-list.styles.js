import { makeStyles } from "@material-ui/core/styles";

import { drawerWidth } from "../../utils/theme";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontWeight: 600
  },
  content: {
    padding: theme.spacing(3),
    minHeight: "100vh",
    background: theme.palette.common.white,
    borderRight: "1px solid #f1f1f1",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth
    }
  }
}));

export default useStyles;
