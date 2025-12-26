import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function AdminRoute() {
  const { role, loading } = useAuth();

  if (!role) return null;

  return role === "Admin" ? <Outlet /> : <Navigate to="/user" replace />;
}

export default AdminRoute;
