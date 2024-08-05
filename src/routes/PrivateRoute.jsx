import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isUserAuthenticated } = useSelector((state) => state.user);
  console.log("🚀 ~ PrivateRoute ~ isUserAuthenticated:", isUserAuthenticated)

  return isUserAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/auth" />
  );
};

export default PrivateRoute;
