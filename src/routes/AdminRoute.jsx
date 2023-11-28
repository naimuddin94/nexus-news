import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";

const AdminRoute = ({ children }) => {
  const isAdmin = true;
  const { user, loading } = useAuthInfo();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};

export default AdminRoute;
