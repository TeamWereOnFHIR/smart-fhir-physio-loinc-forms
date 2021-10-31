import { FhirApiUrl } from "../../constants";

/**
 * FHIR QuestionnaireResponse base resource.
 *
 * See: https://www.hl7.org/fhir/questionnaireresponse.html
 *
 * resourceType: QuestionnaireResponse
 * questionnaire: Questionnaire/id
 * status: in-progress | completed | amended | entered-in-error | stopped
 * authored: datetime
 * author: { reference: Practitioner/id, display: string }
 * subject: { reference: Patient/id, display: string }
 * item: Array of response objects
 */
export const fhirQuestionnaireResponse = {
  resourceType: "QuestionnaireResponse",
  questionnaire: FhirApiUrl.loincPhysioFormURL,
  status: "in-progress",
  authored: "",
  author: {},
  subject: {},
  item: [],
};
