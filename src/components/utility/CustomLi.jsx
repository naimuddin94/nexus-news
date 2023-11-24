import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CustomLi = ({ to, text }) => {
  return (
    <li className="text-slate-800 font-medium">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "bg-primary text-white hover:text-gray-800 py-2" : "bg-gray-300 text-gray-700 py-2")}
      >
        {text}
      </NavLink>
    </li>
  );
};

CustomLi.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLi;
