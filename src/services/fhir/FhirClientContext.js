import { createContext } from "react";

/**
 * Fhir Client Context uses the react context api to track the client state.
 * In our case, the state is pretty much immutable so there is no need to use Redux here.
 */
const context = {
  client: null,
  setClient: function (client) {
    context.client = client;
  },
};

export const FhirClientContext = createContext(context);
