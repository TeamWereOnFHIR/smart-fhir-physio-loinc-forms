export const RANDOM_USER_API_PATH = "https://randomuser.me/api/";

export const FhirServiceConstants = {
  sandboxApi: `https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImkiOiIxIiwiaiI6IjEifQ/fhir`,
  sandboxScopes:
    "launch launch/patient patient/*.* offline_access openid fhirUser",
  redirectUri: "/home",
};

export const FhirResources = {
  // Resources
  questionnaire: "Questionnaire",

  /**
   * Resource Ids: [server][resourceType][Name]Id
   *  sandbox: server - R4 Smarthealthit sandbox
   *  Q: resourceType - Questionnaire
   */
  sandboxQLoincPhysioFormId: "1346977",
};

export const FhirApiUrl = {
  loincPhysioFormURL: `${FhirResources.questionnaire}/${FhirResources.sandboxQLoincPhysioFormId}`,
};
