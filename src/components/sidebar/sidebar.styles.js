import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: props => props.drawerWidth,
      flexShrink: 0
    },
    background: theme.palette.grey.A400
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    width: props => props.drawerWidth
  }
}));

export default useStyles;
