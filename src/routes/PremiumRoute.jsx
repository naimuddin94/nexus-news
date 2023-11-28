import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";

const PremiumRoute = ({ children }) => {
  const { user, loading, role, premiumUser } = useAuthInfo();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if ((user && role === "admin") || premiumUser) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

PremiumRoute.propTypes = {
  children: PropTypes.element,
};

export default PremiumRoute;
