import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log('Token:', token); // Debugging line to check the token value

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;