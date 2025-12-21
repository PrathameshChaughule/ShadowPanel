import { Navigate } from "react-router-dom";

function HomeRedirect() {
  const role = JSON.parse(localStorage.getItem("userData"));

  if (!role) return null;

  return role.role === "Admin" ? (
    <Navigate to="/admin" replace />
  ) : (
    <Navigate to="/user" replace />
  );
}

export default HomeRedirect;
