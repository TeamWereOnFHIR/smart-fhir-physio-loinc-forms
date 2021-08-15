import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // Combine reducers here.
});

const store = configureStore({
  rootReducer,
});

export default store;
