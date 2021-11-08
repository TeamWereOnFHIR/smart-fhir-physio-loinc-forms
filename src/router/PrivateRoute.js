import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";

/**
 * Sets up a private route object.
 *
 * Private routes redirect to root "/" route.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
