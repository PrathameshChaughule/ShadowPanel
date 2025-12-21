import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const role = JSON.parse(localStorage.getItem("userData"));

  if (!role) return null;

  return role.role === "Admin" ? <Outlet /> : <Navigate to="/user" replace />;
}

export default AdminRoute;
