import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: undefined,
  initialPanel: {},
  subPanels: [],
  loading: true,
  error: undefined,
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
      state.loading = false;
    },
    setLoincFormLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearLoincFormData: (state) => {
      state.formData = initialState.formData;
      state.initialPanel = initialState.initialPanel;
      state.subPanels = initialState.subPanels;
    },
    setLoincFormDataError: (state, action) => {
      state.error = action.payload;
    },
    clearLoincFormDataError: (state) => {
      state.error = undefined;
    },
    setLoincFormInitialPanel: (state, action) => {
      state.initialPanel = action.payload;
    },
    setLoincFormSubPanels: (state, action) => {
      state.subPanels = action.payload;
    },
  },
});

export const {
  setLoincFormData,
  setLoincFormLoading,
  clearLoincFormData,
  setLoincFormDataError,
  clearLoincFormDataError,
  setLoincFormInitialPanel,
  setLoincFormSubPanels,
} = loincFormSlice.actions;

export default loincFormSlice.reducer;
