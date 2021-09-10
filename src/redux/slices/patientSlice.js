import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientData: undefined,
  loading: true,
  error: undefined,
};

/**
 * Patient resource redux slice for storing a selected patient's data from FHIR.
 */
export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatient: (state, action) => {
      state.patientData = action.payload;
      state.loading = false;
    },
    setPatientLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearPatient: (state) => {
      state.patientData = initialState;
    },
    setPatientError: (state, action) => {
      state.error = action.payload;
    },
    clearPatientError: (state) => {
      state.error = undefined;
    },
  },
});

export const {
  setPatient,
  setPatientLoading,
  clearPatient,
  setPatientError,
  clearPatientError,
} = patientSlice.actions;

export default patientSlice.reducer;
