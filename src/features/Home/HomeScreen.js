import { useContext, useEffect, useState } from "react";

import Button from "@components/Button/Button";
import { FhirClientContext } from "@services/fhir/FhirClientContext";
import PatientBanner from "@features/PatientBanner/PatientBanner";
import { buttonActionTypes } from "@components/Button/buttonConstants";

const HomeScreen = () => {
  const context = useContext(FhirClientContext);
  const fhir = context.client;
  const [patient, setPatient] = useState({});

  /**
   * Component on init effects.
   *
   * Read patient.
   */
  useEffect(() => {
    getPatientFromFhir();
  }, []);

  const getPatientFromFhir = async () => {
    fhir.patient
      .read()
      .then((patient) => {
        setPatient(patient);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  };

  const handleClickTest = () => {
    alert("Clicked!");
  };

  return (
    <div>
      <PatientBanner patientData={patient} />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace this with actual content or components */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Such content!
              </h1>
              <Button
                actionType={buttonActionTypes.primary}
                handleClick={handleClickTest}
              >
                Primary Raised
              </Button>
              <Button
                actionType={buttonActionTypes.secondary}
                handleClick={handleClickTest}
              >
                Secondary Raised
              </Button>
              <Button
                actionType={buttonActionTypes.flat}
                handleClick={handleClickTest}
              >
                Flat Button
              </Button>
              <Button
                actionType={buttonActionTypes.flatRounded}
                handleClick={handleClickTest}
              >
                Flat Rounded
              </Button>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
