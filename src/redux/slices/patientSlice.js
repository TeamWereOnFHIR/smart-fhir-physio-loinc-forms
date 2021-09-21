import { createSlice } from "@reduxjs/toolkit";
import { initErrorState } from "@common/globalConstants";

const initialState = {
  patientData: undefined,
  loading: true,
  error: initErrorState,
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
    },
    setPatientLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearPatient: (state) => {
      state.patientData = initialState.patientData;
      state.error = initialState.error;
    },
    setPatientError: (state, action) => {
      state.error = action.payload;
    },
    clearPatientError: (state) => {
      state.error = initialState.error;
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
