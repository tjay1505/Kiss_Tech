import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    // Still loading the authentication state, so do not redirect yet.
    return <div className="vh-100 d-flex align-items-center justify-content-center" >loading...</div>; // Or a loading spinner if you prefer
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
