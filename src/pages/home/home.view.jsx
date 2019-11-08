import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import TaskList from "../../components/task-list";

const HomePage = () => (
  <Fragment>
    <Header />
    <Container maxWidth="md">
      <Sidebar />
      <TaskList />
    </Container>
  </Fragment>
);

export default HomePage;
