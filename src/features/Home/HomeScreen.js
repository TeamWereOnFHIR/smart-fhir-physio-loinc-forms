import {
  setLoincFormData,
  setLoincFormDataError,
  setLoincFormInitialPanel,
  setLoincFormLoading,
  setLoincFormSubPanels,
} from "@redux/slices/loincFormSlice";
import {
  setPatient,
  setPatientError,
  setPatientLoading,
} from "@redux/slices/patientSlice";
import { setUser, setUserError, setUserLoading } from "@redux/slices/userSlice";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/Button/Button";
import FhirAPIService from "@services/fhir/FhirAPIService";
import { FhirApiUrl } from "@services/constants";
import { FhirClientContext } from "@services/fhir/FhirClientContext";
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator";
import MessageBanner from "@components/MessageBanner/MessageBanner";
import PatientBanner from "@features/PatientBanner/PatientBanner";
import ProductReviewForm from "../FormHandler/FormHandler";
import { buttonTypes } from "@components/Button/buttonConstants";

const HomeScreen = () => {
  // Fhir Client
  const context = useContext(FhirClientContext);
  const fhir = context.client;
  const fhirAPIService = new FhirAPIService(fhir);

  // Redux
  const dispatch = useDispatch();
  // Patient State
  const patient = useSelector((state) => state.patient);
  // User State
  const user = useSelector((state) => state.user);
  // Form Data State
  const loincForm = useSelector((state) => state.loincForm);

  /**
   * Component on init effects.
   *
   * Read patient.
   */
  useEffect(() => {
    fhirAPIService.getPatientFromFhir();
    getUserFromFhir();
    getQuestionnaire();
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
        dispatch(setUserLoading(false));
      });
  };

  const getQuestionnaire = async () => {
    const url = FhirApiUrl.loincPhysioFormURL;
    fhir
      .request(url)
      .then((data) => {
        dispatch(setLoincFormData(data));
        if (loincForm.error) {
          dispatch(setLoincFormDataError(""));
        }
        const initialPanelItems = data.item.filter(
          (item) => item.type !== "group"
        );
        const subPanels = data.item.filter((item) => item.type === "group");
        const initialPanelData = {
          id: data.id,
          title: data.title,
          item: initialPanelItems,
        };
        dispatch(setLoincFormInitialPanel(initialPanelData));
        dispatch(setLoincFormSubPanels(subPanels));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoincFormDataError(error));
        dispatch(setLoincFormLoading(false));
      });
  };

  const handleClickTest = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      {patient.loading || user.loading || loincForm.loading ? (
        <LoadingIndicator text="Loading..." />
      ) : (
        <>
          <PatientBanner patientData={patient.patientData} />

          {/* Warning Messages */}
          {patient.error && (
            <MessageBanner type="warning" title="Patient Error">
              {patient.error.message}
            </MessageBanner>
          )}
          {user.error && (
            <MessageBanner type="warning" title="User Error">
              {user.error.message}
            </MessageBanner>
          )}
          {loincForm.error && (
            <MessageBanner type="warning" title="Form Error">
              {loincForm.error.message}
            </MessageBanner>
          )}

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
