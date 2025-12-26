import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function ProtectedRoute() {
  const { userLoggedIn, loading } = useAuth();

  if (loading) return null;

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
