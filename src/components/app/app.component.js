import React from "react";
import { Route } from "react-router-dom";

import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";
import Content from "../content/content.component";

import useStyles from "./app.styles";

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
