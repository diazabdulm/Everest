import React from "react";
import Container from "@material-ui/core/Container";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import TaskList from "../../components/task-list";

const HomePage = () => (
  <div>
    <Header />
    <Container maxWidth="md">
      <Sidebar />
      <TaskList />
    </Container>
  </div>
);

export default HomePage;
