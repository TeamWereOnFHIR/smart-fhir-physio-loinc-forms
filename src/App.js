import FormPDF from "@features/Form/FormPDF/FormPDF";
import NavBanner from "@features/Nav/NavBanner";
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
  return (
    <div>
      <NavBanner />
      <BrowserRouter>
        {appRoutes}
        <Route
          exact
          path={"/form/print"}
          render={(props) => <FormPDF {...props} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
