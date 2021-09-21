import { createSlice } from "@reduxjs/toolkit";
import { initErrorState } from "@common/globalConstants";

const initialState = {
  formData: undefined,
  formPanels: [],
  loading: true,
  error: initErrorState,
};

/**
 * Loinc Form Questionnaire resource redux slice for storing loinc form data structuer for consumption.
 */
export const loincFormSlice = createSlice({
  name: "loincForm",
  initialState,
  reducers: {
    setLoincFormData: (state, action) => {
      state.formData = action.payload;
    },
    setLoincFormLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearLoincFormData: (state) => {
      state.formData = initialState.formData;
      state.formPanels = initialState.formPanels;
      state.error = initialState.error;
    },
    setLoincFormDataError: (state, action) => {
      state.error = action.payload;
    },
    clearLoincFormDataError: (state) => {
      state.error = initialState.error;
    },
    setLoincFormPanels: (state, action) => {
      state.formPanels = action.payload;
    },
  },
});

export const {
  setLoincFormData,
  setLoincFormLoading,
  clearLoincFormData,
  setLoincFormDataError,
  clearLoincFormDataError,
  setLoincFormPanels,
} = loincFormSlice.actions;

export default loincFormSlice.reducer;
