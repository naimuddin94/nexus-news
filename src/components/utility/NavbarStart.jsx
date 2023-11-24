import { MdOutlineMenuOpen } from "react-icons/md";
import NavItems from "./NavItems";


const NavbarStart = () => {
    return (
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <MdOutlineMenuOpen size={23} />
            <span className="text-[1rem] uppercase">Menu</span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded w-52 gap-1"
          >
            <NavItems />
          </ul>
        </div>
      </div>
    );
};

export default NavbarStart;