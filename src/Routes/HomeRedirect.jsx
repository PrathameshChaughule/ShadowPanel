import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function HomeRedirect() {
  const { role, loading } = useAuth();
  
  if (!role) return null;

  return role === "Admin" ? (
    <Navigate to="/admin" replace />
  ) : (
    <Navigate to="/user" replace />
  );
}

export default HomeRedirect;
