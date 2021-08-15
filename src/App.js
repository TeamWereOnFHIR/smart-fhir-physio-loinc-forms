import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
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
  return <BrowserRouter>{appRoutes}</BrowserRouter>;
}

export default App;
