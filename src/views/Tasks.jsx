import React, { Fragment, useReducer, useState } from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useTasks from "../hooks/useTasks";
import filters from "../constants/filters";

import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";

import TodoListHeader from "../components/TodoListHeader";
import TodoListAddForm from "../components/TodoListAddForm";
import TodoListItem from "../components/TodoListItem";
import directory from "../constants/filters";

const initialState = {
  selectedProject: "",
  selectedTasks: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PROJECT":
      return { ...state, selectedProject: action.payload };
    case "SELECT_TASKS":
      return { ...state, selectedTasks: action.payload };
    default:
      throw new Error();
  }
};

const TasksPage = () => {
  const { projectId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const filterUrls = filters.map(filter => filter.url);

    filterUrls.includes(projectId) ? true : false;
  }, [projectId]);  

  useEffect(() => {}, []);

  const addProject = async name => firebase.add({ name });

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Fragment>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={handleDrawerToggle} />
      <Switch>
        {directory.map(({ id, name, url, component: RouteElem }) => (
          <RouteElem exact path={url} />
        ))}
        <Route exact path="/:projectId" component={} />
      </Switch>
      {/* <AllTasksRoute exact path="/all" component={} />
      <TodayTasksRoute exact path="/today" component={} />
      <WeekTasksRoute exact path="/week" component={} />
      <ProjectTasksRoute exact path="/:projectId" component={} /> */}
      {/* <main>
        <TodoListHeader toggleDrawer={handleDrawerToggle} />
        <TodoListAddForm />
        <TodoListItem />
      </main>
      <TodoList
        header={<TodoListHeader projectName={} />}
        addForm={<TodoListAddForm />}
      /> */}
    </Fragment>
  );
};

export default TasksPage;
