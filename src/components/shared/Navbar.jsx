import moment from "moment/moment";
import NavbarStart from "../utility/NavbarStart";
import NavbarEnd from "./NavbarEnd";

const Navbar = () => {
  return (
    <div className="navbar justify-between">
      <NavbarStart />
      {/* Navbar date and day */}
      <div className="text-text-light hidden flex-1 text-center md:block">
        {moment().format("dddd, Do MMMM YYYY")}
      </div>
      <NavbarEnd />
    </div>
  );
};

export default Navbar;
