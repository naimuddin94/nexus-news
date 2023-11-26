import { Link } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";

const NavbarEnd = () => {
  const { user, logOut, name, photo } = useAuthInfo();
  return (
    <>
      <ul className="menu menu-horizontal px-1 gap-3">
        {!user && (
          <Link to="/login">
            <li className="bg-secondary px-5 py-2 rounded text-white font-medium hover:brightness-90 duration-200">
              Login
            </li>
          </Link>
        )}
      </ul>

      {user && (
        <div>
          {name && <p className="mr-3">{name}</p>}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt={user?.displayName} src={photo} />
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
              <li onClick={() => logOut()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarEnd;
