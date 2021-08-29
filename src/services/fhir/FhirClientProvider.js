import { FhirClientContext } from "./FhirClientContext";
import { oauth2 as SMART } from "fhirclient";
import { useState } from "react";

/**
 * The Fhir Client Provider provides access to the Fhir Client via context to its children.
 * This is how the app will know about the client.
 */
export default function FhirClientProvider({ children }) {
  const [client, setClient] = useState(null);
  const [error, setError] = useState(null);

  if (error) {
    return <pre>{error.message}</pre>;
  }
  return (
    <FhirClientContext.Provider
      value={{
        client: client,
        setClient: setClient,
      }}
    >
      <FhirClientContext.Consumer>
        {({ client }) => {
          if (!client) {
            SMART.ready()
              .then((client) => setClient(client))
              .catch((error) => setError(error));
            return null;
          }
          return children;
        }}
      </FhirClientContext.Consumer>
    </FhirClientContext.Provider>
  );
}
