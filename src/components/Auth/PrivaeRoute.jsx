
import React from "react";
import { Navigate } from "react-router-dom";

const PrivaeRoute = ({ children }) => {
  const user = null;
  if (!user) {
   return <Navigate to='/login'></Navigate>;
  }
  return children;
};

export default PrivaeRoute;
