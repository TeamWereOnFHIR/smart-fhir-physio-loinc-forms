import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import NavBanner from "@features/Nav/NavBanner";
import PrivateRoute from "./router/PrivateRoute";
import routes from "./router/routes";

function App() {
  const appRoutes = routes.map((route, key) =>
    route.private ? (
      <PrivateRoute
        exact
        path={route.path}
        component={route.component}
        key={key}
      />
    ) : (
      <Route exact path={route.path} component={route.component} key={key} />
    )
  );
  return (
    <div>
      <NavBanner />
      <BrowserRouter>{appRoutes}</BrowserRouter>
    </div>
  );
}

export default App;
