import { Navigate } from "react-router-dom";

function RoleRoute({ children, roles }) {
  const userRole = localStorage.getItem("role"); // admin | normal

  if (!roles.includes(userRole)) {
    return <Navigate to="/no-autorizado" />;
  }

  return children;
}

export default RoleRoute;