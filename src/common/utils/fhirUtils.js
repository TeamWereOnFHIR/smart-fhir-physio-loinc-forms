/**
 * Utils and helper functions for fhir.
 */

/**
 * Parse patient's official name.
 *
 * @param name - Patient's name list from fhir resource
 * @returns patient official name
 */
export const parsePatientName = (name = []) => {
  let entry =
    name.find((nameRecord) => nameRecord.use === "official") || name[0];
  if (!entry) {
    return "";
  }
  return `${entry.given} ${entry.family}`;
};

/**
 * Parse patient medical record number.
 *
 * @param identifier - Patient identifier list.
 * @returns patient medical record number
 */
export const getPatientMedicalRecordNum = (identifier = []) => {
  let id = identifier.find(
    (identRecord) => identRecord?.type?.coding[0].code === "MR"
  );
  return id ? id.value : "";
};

/**
 * Filters for Loinc Form initial panel items.
 * @param items - root list of items for loinc form.
 * @returns Filtered list of only initial panel items.
 */
export const getLoincInitialPanelItems = (items = []) => {
  if (!items) {
    return [];
  }
  return items.filter((item) => item.type !== "group");
};

/**
 * Filters for Loinc Form sub panel groups.
 * @param items - root list of items for loinc form.
 * @returns Filtered list of all available sub panel groups.
 */
export const getLoincSubPanels = (items = []) => {
  if (!items) {
    return [];
  }
  return items.filter((item) => item.type === "group");
};
