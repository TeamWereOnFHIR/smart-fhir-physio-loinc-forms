import { useContext, useEffect } from "react";

import FhirAPIService from "@services/fhir/FhirAPIService";
import { FhirClientContext } from "@services/fhir/FhirClientContext";
import FormHandler from "@features/Form/FormHandler/FormHandler";
import LoadingIndicator from "@components/LoadingIndicator/LoadingIndicator";
import MessageBanner from "@components/MessageBanner/MessageBanner";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  // Fhir Client
  const context = useContext(FhirClientContext);
  const fhir = context.client;
  const fhirAPIService = new FhirAPIService(fhir);

  // Redux
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

  return (
    <div className="bg-gradient-to-b from-green-400 to-white">
      {patient.loading || user.loading || loincForm.loading ? (
        <LoadingIndicator text="Loading..." />
      ) : (
        <>
          {/* <PatientBanner patientData={patient.patientData} /> */}

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
            <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8 items-center py-10 justify-center flex-grow">
                {/* Components */}
                <FormHandler />
            </div>

            {/* /End replace */}
          </main>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
