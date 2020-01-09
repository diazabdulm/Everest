import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(3)
  },
  link: {
    display: "block",
    margin: theme.spacing(3, 0)
  }
}));

export default useStyles;
