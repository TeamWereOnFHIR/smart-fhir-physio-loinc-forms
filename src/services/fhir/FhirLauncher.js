import { oauth2 as SMART } from "fhirclient";
import { useEffect } from "react";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import { FhirServiceConstants } from "../constants";

/**
 * Typically the launch page is an empty page with a `SMART.authorize`
 * Call to auth fhir and then redirect to the 'app'.
 */
const FhirLauncher = () => {
  /**
   * Authorize accepts and object specifying all required information for auth.
   */
  useEffect(() => {
    SMART.authorize({
      clientId: "my-client-id",
      scope: FhirServiceConstants.sandboxScopes,
      redirectUri: FhirServiceConstants.redirectUri,
      iss: FhirServiceConstants.sandboxApi,
    });
  }, []);

  return <LoadingIndicator text={"Launching..."} />;
};

export default FhirLauncher;
