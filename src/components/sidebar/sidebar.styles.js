import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: props => props.drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: props => props.drawerWidth
  }
}));

export default useStyles;
