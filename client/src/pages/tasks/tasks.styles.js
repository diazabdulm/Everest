import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  main: {
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default useStyles;
