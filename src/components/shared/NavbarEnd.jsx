import { Link } from "react-router-dom";

const NavbarEnd = () => {
  return (
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-3">
        <Link to="/login">
          <li className="bg-secondary px-5 py-2 rounded text-white font-medium hover:brightness-90 duration-200">Login</li>
        </Link>
      </ul>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://i.ibb.co/9m0x6ZL/mypic-spandan.jpg"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarEnd;
