import UserHeaderExample from "@features/UserHeaderExample/UserHeaderExample";

// '/' usually goes to some home or landing page, going to example for now.
const routes = [
  { path: "/", component: UserHeaderExample, private: false },
  { path: "/example", component: UserHeaderExample, private: false },
];

export default routes;
