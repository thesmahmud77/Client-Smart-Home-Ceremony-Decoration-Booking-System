import React, { use } from "react";
import { AuthContext } from "../Pages/Firebase/Context & Provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const privateRouteLocation = useLocation();

  console.log("From Private Route", privateRouteLocation);

  if (user) {
    return children;
  }
  return (
    <Navigate state={privateRouteLocation?.pathname} to={"/login"}></Navigate>
  );
};

export default PrivateRoute;
