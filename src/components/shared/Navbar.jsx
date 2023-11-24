import moment from "moment/moment";
import NavbarStart from "../utility/NavbarStart";
import NavbarEnd from "./NavbarEnd";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarStart />
      {/* Navbar date and day */}
      <div className="navbar-center text-text-light">
        {moment().format("dddd, Do MMMM YYYY")}
      </div>
      <NavbarEnd />
    </div>
  );
};

export default Navbar;
