/**
 * Form panel constants.
 *
 * Key = linkId
 *    id = linkId
 *    title = Name of panel
 *    selectId = Select nav id in component
 *    panelId = Panel id in component
 */
export const Panels = {
  InitialPanel: {
    id: "76453-0",
    key: "InitialPanel",
    title: "Physical therapy initial visit [76453-0]",
    selectId: "select-76453-0",
    panelId: "panel-76453-0",
  },
  GlobalPhysicalFuncPanel: {
    id: "77574-2",
    key: "GlobalPhysicalFuncPanel",
    title: "Global measure of physical function [77574-2]",
    selectId: "select-77574-2",
    panelId: "panel-77574-2",
  },
  ConditionPopulationPanel: {
    id: "77575-9",
    key: "ConditionPopulationPanel",
    title: "Condition or population specific [77575-9]",
    selectId: "select-77575-9",
    panelId: "panel-77575-9",
  },
  SelfCareMobilityPanel: {
    id: "77576-7",
    key: "SelfCareMobilityPanel",
    title: "Self-care and mobility [77576-7]",
    selectId: "select-77576-7",
    panelId: "panel-77576-7",
  },
  PatientGoalsPanel: {
    id: "92562-8",
    key: "PatientGoalsPanel",
    title: "Patient goals [92562-8]",
    selectId: "select-92562-8",
    panelId: "panel-92562-8",
  },
  PlannedInterventionPanel: {
    id: "92566-9",
    key: "PlannedInterventionPanel",
    title: "Planned intervention or services [92566-9]",
    selectId: "select-92566-9",
    panelId: "panel-92566-9",
  },
  InterventionServicesPanel: {
    id: "89176-2",
    key: "InterventionServicesPanel",
    title: "Intervention or services provided [89176-2]",
    selectId: "select-89176-2",
    panelId: "panel-89176-2",
  },
  BillingPanel: {
    id: "89175-4",
    key: "BillingPanel",
    title: "Billing info [89175-4]",
    selectId: "select-89175-4",
    panelId: "panel-89175-4",
  },
};

/**
 * Form initial values for each panel
 *
 * [linkId] - linkId matching fhir field.
 */

export const kneeInjuryValues = {
  "82325-2": "",
  "82332-8": "",
};
export const neckDisabilityValues = {
  "82227-0": "",
  "82228-8": "",
  "82229-6": "",
  "82230-4": "",
  "82231-2": "",
  "82232-0": "",
  "82233-8": "",
  "82234-6": "",
  "82235-3": "",
  "82236-1": "",
  "82237-9": "",
};
export const patientReportOutcomesValues = {
  "89195-2": "",
  "89194-5": "",
  "89193-7": "",
};
export const performanceMesureValues = {
  "89190-3": "",
  "89191-1": "",
  "89192-9": "",
};
export const painValues = {
  "82326-0": "",
  "82327-8": "",
  "82328-6": "",
  "82329-4": "",
};
export const dailyValues = {
  "82330-2": "",
  "82331-0": "",
};
export const kneeInjuryPanels = {
  PainPanel: painValues,
  DailyLiving: dailyValues,
};
export const conditionPopulationPanels = {
  KneeInjuryPanel: kneeInjuryPanels,
  NeckDisabilityPanel: neckDisabilityValues,
  PatientReportedOutcomesPanel: patientReportOutcomesValues,
  PerformanceMesurePanel: performanceMesureValues,
};
export const initialPanelValues = {
  "76435-7": "",
  "76698-0": "",
  "76471-2": "",
  "76470-4": "",
  "76696-4": "",
  "76423-3": "",
  "76417-5": "",
  "76419-1": "",
  "45952-9": "",
  "86637-6": "",
  "18630-4": "",
  "81885-6": "",
  "89177-0": "",
  "76442-3": "",
  "76472-0": "",
  "76444-9": "",
  "76445-6": "",
  "76446-4": "",
  "89189-5": "",
  "89188-7": "",
  "57828-6": "",
  "92725-1": "",
};

export const globalMeasureOfPhysicalFunctionValues = {
  "79529-4": "",
  "79530-2": "",
  "79531-0": "",
  "79532-8": "",
  "79533-6": "",
  "79534-4": "",
  "79535-1": "",
  "79536-9": "",
  "79537-7": "",
  "79421-4": "",
  "79422-2": "",
  "77866-2": "",
  "77874-6": "",
  "91721-1": "",
  "77580-9": "",
  "92391-2": "",
  "92448-0": "",
  "91612-2": "",
  "77578-3": "",
  "90705-5": "",
  "90884-8": "",
  "77579-1": "",
};

export const selfcareAndMobilityValues = {
  "52642-6": "",
  "52644-2": "",
  "52645-9": "",
  "52662-4": "",
  "52646-7": "",
  "52647-5": "",
  "52663-2": "",
  "52664-0": "",
  "52648-3": "",
  "52650-9": "",
  "52651-7": "",
  "52672-3": "",
  "52656-6": "",
  "52668-1": "",
  "52654-1": "",
  "52653-3": "",
  "52660-8": "",
  "52659-0": "",
  "52658-2": "",
  "52657-4": "",
  "52671-5": "",
  "52667-3": "",
  "52670-7": "",
  "52669-9": "",
  "52665-7": "",
};
export const ptGoalsValues = {
  "92710-3": "",
  "92709-5": "",
  "92708-7": "",
};
export const plannedInterventionValues = {
  "92705-3": "",
  "92823-4": "",
  "92704-6": "",
  "92557-8": "",
  "92553-7": "",
  "92554-5": "",
  "92555-2": "",
  "92556-0": "",
  "92558-6": "",
  "92559-4": "",
  "92560-2": "",
  "92565-1": "",
  "92706-1": "",
};
export const interventionServicesValues = {
  "92705-3": "",
  "92823-4": "",
  "92704-6": "",
  "92557-8": "",
  "92553-7": "",
  "92554-5": "",
  "92555-2": "",
  "92556-0": "",
  "92558-6": "",
  "92559-4": "",
  "92560-2": "",
  "92565-1": "",
  "92706-1": "",
};

export const billingInfoValues = {
  "45952-9": "",
  "52829-9": "",
  "86255-7": "",
  "81885-6": "",
  "89266-1": "",
  "76430-8": "",
  "89265-3": "",
  "89178-8": "",
  "76428-2": "",
};

export const initialValues = {
  InitialPanel: initialPanelValues,
  GlobalPhysicalFuncPanel: globalMeasureOfPhysicalFunctionValues,
  SelfCareMobilityPanel: selfcareAndMobilityValues,
  PatientGoalsPanel: ptGoalsValues,
  PlannedInterventionPanel: plannedInterventionValues,
  InterventionServicesPanel: interventionServicesValues,
  BillingInfoPanel: billingInfoValues,
  ConditionPopulationPanel: conditionPopulationPanels,
};

/**
 * Form field types. Values from fhir item types.
 *
 * Fhir: Fhir data types.
 * Form: App data types for formik.
 * DateTypeIds: Fields that should be converted to a date picker.
 */
export const formTypes = {
  fhir: {
    string: "string",
    number: "decimal",
    select: "choice",
    group: "group",
  },
  form: {
    string: "string",
    text: "text",
    number: "number",
    select: "select",
  },
  dateTypeIds: ["76423-3"],
};

/**
 * Form placeholder text for empty fields.
 */
export const formPlaceholder = {
  text: "Enter a text value",
  number: "Enter a numeric value",
  select: "Select an option",
  date: "Click to select a date",
};

/**
 * Accessors for sub panel keys for formik values based on fhir id.
 */
export const subPanelKeys = {
  "82324-5": "KneeInjuryPanel",
  "86631-9": "KneeInjuryPanel.PainPanel",
  "86632-7": "KneeInjuryPanel.DailyLiving",
  "82226-2": "NeckDisabilityPanel",
  "89196-0": "PatientReportedOutcomesPanel",
  "89197-8": "PerformanceMesurePanel",
};
