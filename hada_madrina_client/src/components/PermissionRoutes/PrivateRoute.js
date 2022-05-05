import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, admin, user }) => {
  const role = localStorage.getItem("role");

  return role === admin || role === user ? children : <Navigate to="/denied" />;
};
