import { createSlice } from "@reduxjs/toolkit";

const initialState = { userData: undefined, loading: true };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    setUserLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;
export default userSlice.reducer;
