import { configureStore } from "@reduxjs/toolkit";
import loincFormReducer from "./slices/loincFormSlice";
import patientReducer from "./slices/patientSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    loincForm: loincFormReducer,
    patient: patientReducer,
    user: userReducer,
  },
});

export default store;
