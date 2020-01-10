import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider, useDispatch } from "react-redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import App from "./App";

describe("App", () => {
  let wrapper;
  const mockStore = configureStore([...getDefaultMiddleware()]);

  beforeEach(() => {
    const store = mockStore({
      user: {},
      tasks: [],
      projects: [],
      visibilityFilter: ""
    });

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("render with redux state", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
