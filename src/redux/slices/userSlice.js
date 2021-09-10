import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: undefined,
  loading: true,
  error: undefined,
};

/**
 * User (Practitioner) resource redux slice for storing a selected user's data from FHIR.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      state.userData = initialState;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    clearUserError: (state) => {
      state.error = undefined;
    },
  },
});

export const {
  setUser,
  setUserLoading,
  clearUser,
  setUserError,
  clearUserError,
} = userSlice.actions;

export default userSlice.reducer;
