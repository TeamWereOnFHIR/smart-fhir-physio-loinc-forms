// organize-imports-ignore

import FhirLauncher from "@services/fhir/FhirLauncher";
import FormHandler from "@features/FormHandler/FormHandler";
import UserHeaderExampleContainer from "../features/UserHeaderExample/UserHeaderExampleContainer";

// '/' usually goes to some home or landing page, going to example for now.
const routes = [
  { path: "/", component: FhirLauncher, private: false },
  { path: "/example", component: UserHeaderExampleContainer, private: false },
  { path: "/form", component: FormHandler, private: false },
];

export default routes;
