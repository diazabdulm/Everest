import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

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
      <Route path="/project/:id" component={Content} />
    </div>
  );
};

export default App;
