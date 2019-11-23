import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";
import Content from "../content/content.component";

import { beginCheckUserSession } from "../../redux/user.module";

import useStyles from "./app.styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beginCheckUserSession());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Route path="/project/:id" component={Content} />
    </div>
  );
};

export default App;
