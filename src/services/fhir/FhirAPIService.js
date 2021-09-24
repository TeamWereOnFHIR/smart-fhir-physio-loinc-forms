import { getLoincInitialPanelItems, getLoincSubPanels } from "@utils/fhirUtils";
import {
  setLoincFormData,
  setLoincFormDataError,
  setLoincFormLoading,
  setLoincFormPanels,
} from "@redux/slices/loincFormSlice";
import {
  setPatient,
  setPatientError,
  setPatientLoading,
} from "@redux/slices/patientSlice";
import { setUser, setUserError, setUserLoading } from "@redux/slices/userSlice";

import { FhirApiUrl } from "@services/constants";
import { initErrorState } from "@common/globalConstants";
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
   * Stores in redux.
   */
  getPatientFromFhir = async () => {
    const patientState = store.getState().patient;

    this.fhirClient.patient
      .read()
      .then((data) => {
        // Store Patient resource
        store.dispatch(setPatient(data));

        // Cleanup
        if (patientState.error.message) {
          store.dispatch(setPatientError(initErrorState));
        }
        store.dispatch(setPatientLoading(false));
      })
      .catch((error) => {
        store.dispatch(setPatientError(error));
        store.dispatch(setPatientLoading(false));
        console.error(error);
      });
  };

  /**
   * Reads user data from connected Fhir Client.
   *
   * Stores in redux.
   */
  getUserFromFhir = async () => {
    const userState = store.getState().user;

    this.fhirClient.user
      .read()
      .then((data) => {
        // Store user resource
        store.dispatch(setUser(data));

        // Cleanup
        store.dispatch(setUserLoading(false));
        if (userState.error.message) {
          store.dispatch(setUserError(initErrorState));
        }
      })
      .catch((error) => {
        store.dispatch(setUserError(error));
        store.dispatch(setUserLoading(false));
        console.error(error);
      });
  };

  /**
   * Reads questionnaire data with Fhir Client.
   *
   * Extracts initial panel fields, and subpanel groups.
   *
   * Stores in redux.
   */
  getLoincQuestionnaire = async () => {
    const url = FhirApiUrl.loincPhysioFormURL;
    const loincFormState = store.getState().loincForm;

    this.fhirClient
      .request(url)
      .then((data) => {
        // Store main resource
        store.dispatch(setLoincFormData(data));

        // Store Panel Data
        const initialPanelData = {
          linkId: data.code[0].code,
          text: data.title,
          type: "group",
          required: true,
          item: getLoincInitialPanelItems(data?.item),
        };
        const panels = getLoincSubPanels(data?.item);
        panels.unshift(initialPanelData);
        store.dispatch(setLoincFormPanels(panels));

        // Cleanup
        if (loincFormState.error.message) {
          store.dispatch(setLoincFormDataError(initErrorState));
        }
        store.dispatch(setLoincFormLoading(false));
      })
      .catch((error) => {
        console.error(error);
        store.dispatch(setLoincFormDataError(error));
        store.dispatch(setLoincFormLoading(false));
      });
  };
}

export default FhirAPIService;
