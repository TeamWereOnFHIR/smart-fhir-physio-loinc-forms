import FhirClientProvider from "@services/fhir/FhirClientProvider";
import UserHeaderExample from "./UserHeaderExample";

const UserHeaderExampleContainer = () => {
  return (
    <FhirClientProvider>
      <UserHeaderExample />
    </FhirClientProvider>
  );
};

export default UserHeaderExampleContainer;
