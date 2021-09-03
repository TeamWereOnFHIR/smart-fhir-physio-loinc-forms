import { getPatientMedicalRecordNum, parsePatientName } from "@utils/fhirUtils";

const PatientBanner = ({ patientData }) => {
  const ptName = parsePatientName(patientData.name);
  const ptMedicalRecordNumber = getPatientMedicalRecordNum(
    patientData.identifier
  );
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row gap-x-8">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Patient</h1>
              <p>{ptName}</p>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Medical Record Number
              </h1>
              <p>{ptMedicalRecordNumber}</p>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Gender</h1>
              <p className="capitalize">{patientData.gender}</p>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">DOB</h1>
              <p>{patientData.birthDate}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PatientBanner;
