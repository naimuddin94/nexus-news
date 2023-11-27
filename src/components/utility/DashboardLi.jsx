import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const DashboardLi = ({ to, text, icon: Icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-primary text-white flex items-center px-4 py-1 rounded gap-1 font-medium hover:bg-third"
          : "bg-white flex items-center px-4 py-1 rounded gap-1 font-medium hover:bg-third"
      }
    >
      <Icon size={20} />
      {text}
    </NavLink>
  );
};

DashboardLi.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default DashboardLi;
