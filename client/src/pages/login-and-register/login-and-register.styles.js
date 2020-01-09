import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(8, 0)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  button: { margin: theme.spacing(3, 0, 2) }
}));

export default useStyles;
