import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  headerBar: {
    display: "flex",
    alignItems: "center"
  },
  projectActions: {
    flex: 1
  }
}));

export default useStyles;
