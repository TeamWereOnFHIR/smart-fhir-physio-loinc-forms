import FhirClientProvider from "@services/fhir/FhirClientProvider";
import HomeScreen from "./HomeScreen";

/**
 * The home container for providing apis and contexts to the Home View.
 *
 * @returns Home View
 */
const HomeContainer = () => {
  return (
    <FhirClientProvider>
      <HomeScreen />
    </FhirClientProvider>
  );
};

export default HomeContainer;
