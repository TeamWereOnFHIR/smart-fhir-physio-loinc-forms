/**
 * Utils and helper functions for fhir.
 */

/**
 * Parse patient's official name.
 *
 * @param {Object} name - Patient's name object from fhir resource
 * @returns
 */
export const parsePatientName = (name = []) => {
  let entry =
    name.find((nameRecord) => nameRecord.use === "official") || name[0];
  if (!entry) {
    return "";
  }
  return `${entry.given} ${entry.family}`;
};

export const getPatientMedicalRecordNum = (identifier = []) => {
  let id = identifier.find(
    (identRecord) => identRecord?.type?.coding[0].code === "MR"
  );
  return id ? id.value : "";
};
