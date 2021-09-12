import {
  setPatient,
  setPatientError,
  setPatientLoading,
} from "@redux/slices/patientSlice";

import store from "@redux/store";

/**
 * FHIR API Service for FHIR server calls.
 *
 * Hooks are not allowed outside function components but we can access redux store.
 */
class FhirAPIService {
  /**
   * Constructs API Service and gives access to authed fhir client.
   *
   * @param fhirClient - Authed Fhir Client
   */
  constructor(fhirClient) {
    this.fhirClient = fhirClient;
  }

  /**
   * Reads Patient from connected Fhir Client.
   *
   * @returns User object with data.
   */
  getPatientFromFhir = async () => {
    const patientState = store.getState().patient;

    this.fhirClient.patient
      .read()
      .then((data) => {
        store.dispatch(setPatient(data));
        if (patientState.error) {
          store.dispatch(setPatientError(""));
        }
        store.dispatch(setPatientLoading(false));
      })
      .catch((error) => {
        store.dispatch(setPatientError(error));
        console.error(error);
      });
  };
}

export default FhirAPIService;
