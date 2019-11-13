import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

const useStyles = makeStyles({
  root: {
    display: "flex"
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
