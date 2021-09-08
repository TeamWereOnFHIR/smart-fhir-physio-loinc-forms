import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./slices/patientSlice";

const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});

export default store;
