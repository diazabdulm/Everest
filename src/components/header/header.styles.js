import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appbar: {
    borderBottom: `solid 1px ${theme.palette.primary.dark}`,
    zIndex: theme.zIndex.drawer + 1
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
      display: "flex" // fixes weird SVG spacing
    }
  },
  toolbar: {
    margin: "auto",
    maxWidth: 912,
    width: "100%"
  },
  icon: {
    color: theme.palette.common.white
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default useStyles;
