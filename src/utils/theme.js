import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#db4c3f"
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
      minHeight: 38,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 38
      },
      "@media (min-width:600px)": {
        minHeight: 48
      }
    }
  }
});

export default theme;
