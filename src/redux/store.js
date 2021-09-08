import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./slices/patientSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    patient: patientReducer,
    user: userReducer,
  },
});

export default store;
