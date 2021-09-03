// organize-imports-ignore

import FhirLauncher from "@services/fhir/FhirLauncher";
import FormHandler from "@features/FormHandler/FormHandler";
import HomeContainer from "../features/Home/HomeContainer";

// '/' usually goes to some home or landing page, going to example for now.
const routes = [
  { path: "/", component: FhirLauncher, private: false },
  { path: "/home", component: HomeContainer, private: false },
  { path: "/form", component: FormHandler, private: false },
];

export default routes;
