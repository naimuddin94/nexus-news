import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CustomLi = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-primary text-white hover:bg-third py-2 rounded px-4 font-medium"
          : "bg-gray-300 text-gray-700 hover:bg-third py-2 rounded px-4 font-medium"
      }
    >
      {text}
    </NavLink>
  );
};

CustomLi.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLi;
