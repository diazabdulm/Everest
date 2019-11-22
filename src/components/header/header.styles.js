import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appbar: {
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  }
}));

export default useStyles;
