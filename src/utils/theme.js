import { createMuiTheme } from "@material-ui/core/styles";

export const drawerWidth = 266;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#db4c3f",
      dark: "#ca2100"
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "0 1px 2px rgba(0,0,0,0.15)"
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
});