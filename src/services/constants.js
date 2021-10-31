export const RANDOM_USER_API_PATH = "https://randomuser.me/api/";

// Original API Code for PT and Provider selection
const baseApiCode = "eyJoIjoiMSIsImkiOiIxIiwiaiI6IjEifQ";

// Current API Code to bypass selection
const apiCode =
  "eyJoIjoiMSIsImIiOiI2N2NiZjA5MC00ZGRiLTQ3OTktOTlmZi1hMjhhYmUyNzQwYjEiLCJpIjoiMSIsImoiOiIxIiwiZSI6ImU0NDNhYzU4LThlY2UtNDM4NS04ZDU1LTc3NWMxYjhmM2EzNyJ9";

// FHIR Launcher constants for SmartHealthIT Launchpad
export const FhirServiceConstants = {
  sandboxApi: `https://launch.smarthealthit.org/v/r4/sim/${apiCode}/fhir`,
  sandboxScopes:
    "launch patient/*.* user/*.* offline_access openid fhirUser profile",
  redirectUri: "/home",
};

// FHIR Resource Constants
export const FhirResources = {
  // Resources
  questionnaire: "Questionnaire",

  /**
   * Resource Ids: [server][resourceType][Name]Id
   *  sandbox: server - R4 Smarthealthit sandbox
   *  Q: resourceType - Questionnaire
   */
  sandboxQLoincPhysioFormId: "1359566",
};

// FHIR API URLs
export const FhirApiUrl = {
  loincPhysioFormURL: `${FhirResources.questionnaire}/${FhirResources.sandboxQLoincPhysioFormId}`,
};
