import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "system-ui",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

export default theme;
