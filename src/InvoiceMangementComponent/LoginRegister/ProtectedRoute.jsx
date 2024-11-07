import { Navigate } from "react-router-dom";
import { LoginRegisterContext } from "../../InvoiceManagementContext/LoginRegisterContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { loginStatus } = useContext(LoginRegisterContext);
  
  if (!loginStatus) {
    // Redirect to the login page if not logged in
    return <Navigate to="/login" replace />;
  }

  // Render the child components if logged in
  return children;
};

export default ProtectedRoute;
