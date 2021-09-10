import Button from "@components/Button/Button";
import { buttonTypes } from "@components/Button/buttonConstants";
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator";
import PatientBanner from "@features/PatientBanner/PatientBanner";
import {
  setPatient,
  setPatientError,
  setPatientLoading,
} from "@redux/slices/patientSlice";
import { setUser, setUserError, setUserLoading } from "@redux/slices/userSlice";
import { FhirClientContext } from "@services/fhir/FhirClientContext";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductReviewForm from "../FormHandler/FormHandler";

const HomeScreen = () => {
  // Fhir Client
  const context = useContext(FhirClientContext);
  const fhir = context.client;

  // Redux
  const dispatch = useDispatch();
  // Patient State
  const patient = useSelector((state) => state.patient);
  // User State
  const user = useSelector((state) => state.user);

  /**
   * Component on init effects.
   *
   * Read patient.
   */
  useEffect(() => {
    getPatientFromFhir();
    getUserFromFhir();
  }, []);

  // #TODO: Make Fhir Service
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

  const getUserFromFhir = async () => {
    fhir.user
      .read()
      .then((data) => {
        dispatch(setUser(data));
        dispatch(setUserLoading(false));
        if (user.error) {
          dispatch(setUserError(""));
        }
      })
      .catch((error) => {
        dispatch(setUserError(error));
        // Temporary
        console.error(error);
      });
  };

  const handleClickTest = () => {
    alert("Clicked!");
  };

  return (
    <div>
      {patient.loading || user.loading ? (
        <LoadingIndicator text="Loading..." />
      ) : (
        <>
          <PatientBanner patientData={patient.patientData} />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Replace this with actual components */}
              <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-2">
                  <ProductReviewForm />
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
