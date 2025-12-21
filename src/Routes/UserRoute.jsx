import { Navigate, Outlet } from "react-router-dom";

function UserRoute() {
  const role = JSON.parse(localStorage.getItem("userData"));

  if (!role) return null;

  return role.role === "User" ? <Outlet /> : <Navigate to="/" replace />;
}

export default UserRoute;
