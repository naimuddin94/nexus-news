import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";

const PublisherRoute = ({ children }) => {
  const { user, loading, role } = useAuthInfo();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if ((user && role === "publisher") || role === "admin") {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

PublisherRoute.propTypes = {
  children: PropTypes.element,
};

export default PublisherRoute;
