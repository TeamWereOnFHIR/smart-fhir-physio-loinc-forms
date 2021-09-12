import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/Button/Button";
import FhirAPIService from "@services/fhir/FhirAPIService";
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
    fhirAPIService.getUserFromFhir();
    fhirAPIService.getLoincQuestionnaire();
  }, []);

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
          {patient.error.message && (
            <MessageBanner
              type="warning"
              title={`Patient ${patient.error.name}`}
            >
              {patient.error.message}
            </MessageBanner>
          )}
          {user.error.message && (
            <MessageBanner type="warning" title={`User ${user.error.name}`}>
              {user.error.message}
            </MessageBanner>
          )}
          {loincForm.error.message && (
            <MessageBanner
              type="warning"
              title={`Form ${loincForm.error.name}`}
            >
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
