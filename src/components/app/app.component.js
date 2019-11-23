import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";
import Content from "../content/content.component";

import firebase, {
  createUserProfileDocument
} from "../../firebase/firebase.utils";

import { setUser } from "../../redux/user.module";

import useStyles from "./app.styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          dispatch(
            setUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          );
        });
      } else {
        dispatch(setUser(user));
      }
    });

    return () => unsubscribe();
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
