import {
  setPatient,
  setPatientError,
  setPatientLoading,
} from "@redux/slices/patientSlice";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/Button/Button";
import { FhirClientContext } from "@services/fhir/FhirClientContext";
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator";
import PatientBanner from "@features/PatientBanner/PatientBanner";
import { buttonTypes } from "@components/Button/buttonConstants";

const HomeScreen = () => {
  // Fhir Client
  const context = useContext(FhirClientContext);
  const fhir = context.client;

  // Patient State
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);

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
      .then((data) => {
        dispatch(setPatient(data));
        dispatch(setPatientLoading(false));
        if (patient.error) {
          dispatch(setPatientError(""));
        }
      })
      .catch((error) => {
        dispatch(setPatientError(error));
        // Temporary
        console.error(error);
      });
  };

  const handleClickTest = () => {
    alert("Clicked!");
  };

  return (
    <div>
      {patient.loading ? (
        <LoadingIndicator text="Loading..." />
      ) : (
        <>
          <PatientBanner patientData={patient.patientData} />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Replace this with actual components */}
              <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Such content!
                  </h1>
                  <Button
                    buttonType={buttonTypes.primary}
                    handleClick={handleClickTest}
                  >
                    Primary Button
                  </Button>
                  <Button
                    buttonType={buttonTypes.secondary}
                    handleClick={handleClickTest}
                  >
                    Secondary Button
                  </Button>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
