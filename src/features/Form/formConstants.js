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
    title: "Patient initial visit details",
    selectId: "select-76453-0",
    panelId: "panel-76453-0",
  },
  GlobalPhysicalFuncPanel: {
    id: "72989",
    title: "Global measure of physical function",
    selectId: "select-72989",
    panelId: "panel-72989",
  },
  ConditionPopulationPanel: {
    id: "72988",
    title: "Condition or population specific",
    selectId: "select-72988",
    panelId: "panel-72988",
  },
  SelfCareMobilityPanel: {
    id: "72990",
    title: "Self-care and mobility",
    selectId: "select-72990",
    panelId: "panel-72990",
  },
  PatientGoalsPanel: {
    id: "111748",
    title: "Patient goals",
    selectId: "select-111748",
    panelId: "panel-111748",
  },
  PlannedInterventionPanel: {
    id: "111728",
    title: "Planned intervention or services",
    selectId: "select-111728",
    panelId: "panel-111728",
  },
  InterventionServicesPanel: {
    id: "100794",
    title: "Intervention or services provided",
    selectId: "select-100794",
    panelId: "panel-100794",
  },
  BillingPanel: {
    id: "100804",
    title: "Billing info",
    selectId: "select-100804",
    panelId: "panel-100804",
  },
};

/**
 * Initial form panel values for each panel
 *
 * [linkId]
 *
 * We use linkId as per Fhir field linkIds.
 */
export const initialValues = {
  InitialPanel: initialPanelValues,
  GlobalPhysicalFuncPanel: globalMeasureOfPhysicalFunctionValues,
  SelfCareMobilityPanel: selfcareAndMobilityValues,
  PtGoalsValues: ptGoalsValues,
  PlannedInterventionPanel: plannedInterventionValues,
  InterventionServicesPanel: interventionServicesValues,
  billingInfoValues: billingInfoValues,
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
  "89188-7": "",
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
