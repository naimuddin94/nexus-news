import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const LandingLi = ({ to, text, icon: Icon }) => {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive && location.pathname === "/dashboard"
          ? "bg-primary text-white flex items-center px-4 py-1 rounded gap-1 font-medium hover:bg-third"
          : "bg-white flex items-center px-4 py-1 rounded gap-1 font-medium hover:bg-third"
      }
    >
      <Icon size={20} />
      {text}
    </NavLink>
  );
};

LandingLi.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
};

export default LandingLi;
