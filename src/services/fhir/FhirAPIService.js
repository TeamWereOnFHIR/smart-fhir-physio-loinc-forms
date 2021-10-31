import { Panels, formTypes } from "@features/Form/formConstants";
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
import { fhirQuestionnaireResponse } from "@services/fhir/models/fhirQuestionnaireResponse";
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

  /**
   * Submit current form values as QuestionnaireResponse.
   *
   * @param formValues - Form Values response object from Formik.
   * @param formPanels - Array of form panels from redux store.
   */
  saveQuestionnaireResponse = async (
    formValues,
    formPanels,
    formId,
    patientId,
    providerId
  ) => {
    let res = undefined;
    // Setup questionnaire response information
    const resource = fhirQuestionnaireResponse;
    resource.author.reference = `Practitioner/${providerId}`;
    resource.subject.reference = `Patient/${patientId}`;
    resource.authored = new Date();

    /*
      Update response items.
      Note that QuestionnaireResponse must match structure of Questionnaire here
      See: https://www.hl7.org/fhir/questionnaireresponse.html (2.38.4 and 2.38.4.1)

      This means that initial panel will not be in a 'group' but others will be.
      TODO: We might need to customise Questionnaire to simplify linkIds OR change our linkId usage.
      Note: Could be structured better but this is easier to read.
    */
    resource.item = [
      ...this.mapFormToPanelAnswers(formPanels[0], formValues.InitialPanel),
      ...this.mapFormToPanelAnswers(
        formPanels[1],
        formValues.GlobalPhysicalFuncPanel
      ),
      // ...this.mapFormToPanelAnswers(
      //   formPanels[2],
      //   formValues.ConditionPopulationPanel
      // ),
      ...this.mapFormToPanelAnswers(
        formPanels[3],
        formValues.SelfCareMobilityPanel
      ),
      ...this.mapFormToPanelAnswers(
        formPanels[4],
        formValues.PatientGoalsPanel
      ),
      ...this.mapFormToPanelAnswers(
        formPanels[5],
        formValues.PlannedInterventionPanel
      ),
      ...this.mapFormToPanelAnswers(
        formPanels[6],
        formValues.InterventionServicesPanel
      ),
      ...this.mapFormToPanelAnswers(formPanels[7], formValues.BillingPanel),
    ];
    console.log("Items for saving.");
    console.log(formPanels);
    console.log(formValues);

    // Update if formId existing.
    if (formId) {
      resource.id = formId;
      res = await this.fhirClient.update(resource);
    } else {
      res = await this.fhirClient.create(resource);
    }
    return res;
  };

  /**
   * Maps form values from specific form panel data.
   * @param formPanel - panel to map.
   * @param formValues - relevant form values for this panel.
   * @returns Array of answer objects for a panel.
   */
  mapFormToPanelAnswers = (formPanel, formValues) => {
    const valueKeys = Object.keys(formValues);
    if (formPanel.linkId === Panels.InitialPanel.id) {
      // Map Initial Panel without group
      return this.mapAnswerItems(formPanel, formValues);
    } else if (formPanel.linkId === Panels.ConditionPopulationPanel.id) {
      // TODO: Complex with sub-panels
      return [];
    } else {
      // All other panels are just a single group with no sub-panels
      return this.mapFormGroupToAnswers(formPanel, formValues);
    }
  };

  mapFormGroupToAnswers = (formPanel, formValues) => {
    // Form group is an object with items of mapped form field answers
    const answerGroup = {
      linkId: formPanel.linkId,
      text: formPanel.text,
      item: [],
    };
    answerGroup.item = this.mapAnswerItems(formPanel, formValues);
    return [answerGroup];
  };

  /**
   * Map answer items for a panel and form values (not group)
   * @param formPanel - panel with data to map
   * @param formValues - form value from fields
   * @returns Array of answer objects relating to panel.
   */
  mapAnswerItems = (formPanel, formValues) => {
    const valueKeys = Object.keys(formValues);
    const answers = valueKeys.map((key) => {
      // Don't bother submitting an answer if no response.
      if (formValues[key]) {
        const answerItem = {};
        const panelItem = formPanel.item.filter((item) =>
          item.linkId.includes(key)
        )[0];
        answerItem.linkId = key;
        answerItem.text = panelItem?.text || "";
        // Bit of a hack just to deal date and wrong encoding in Questionnaire. Fix later.
        if (key === "76423-3") {
          answerItem.answer = this.encodeAnswerValues(
            formTypes.fhir.dateTime,
            formValues[key]
          );
        } else {
          answerItem.answer = this.encodeAnswerValues(
            panelItem.type,
            formValues[key]
          );
        }

        return answerItem;
      }
    });
    return answers;
  };

  /**
   * Encodes answer values based on available type.
   * @param panelItemType - string type of panel item.
   * @param value - value for this form answer relating to panel item.
   * @returns Answer encoded for response.
   */
  encodeAnswerValues = (panelItemType, value) => {
    const answer = [];
    switch (panelItemType) {
      case formTypes.fhir.string:
        answer.push({
          valueString: value,
        });
        break;
      case formTypes.fhir.number:
        answer.push({
          valueDecimal: value,
        });
        break;
      case formTypes.fhir.select:
        answer.push({
          valueCoding: {
            code: value.split("_")[0],
            display: value.split("_").pop(),
          },
        });
        break;
      case formTypes.fhir.dateTime:
        answer.push({
          valueDateTime: value,
        });
        break;
    }
    return answer;
  };
}

export default FhirAPIService;
