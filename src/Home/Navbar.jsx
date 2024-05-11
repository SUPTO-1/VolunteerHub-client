import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    } else {
      setDisplayName("");
      setPhotoURL("");
    }
  }, [user]);
  if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-purple-800 text-center flex justify-center items-center mx-auto mt-24"></div>;
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "User logged in successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Something went wrong!Try Again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const links = (
    <>
      <li className="text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? " underline decoration-wavy decoration-2" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? " underline decoration-wavy decoration-2" : ""
          }
          to="/need"
        >
          Need Volunteer
        </NavLink>
      </li>
      {user && (
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-xl mt-2">
           My Profile
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/add'>Add Volunteer Post</Link>
            </li>
            <li>
              <Link to='/manage'>Manage My Post</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
  return (
    <div className="font-roboto md:m-4 md:mt-2 shadow-xl rounded-md">
      <div className="navbar lg:p-8 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <h2 className="btn btn-ghost font-roboto pl-0 text-sm md:text-3xl font-medium md:font-bold">
            VolunteerHub
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <div className="flex navbar-end">
              <Link to="/login">
                <a className="btn  text-xs md:text-xl border-none shadow-xl">
                  Login
                </a>
              </Link>
              <Link to="/signup">
                <a className="btn  text-xs md:text-xl md:ml-4 border-none shadow-xl">
                  Register
                </a>
              </Link>
            </div>
          ) : (
            <div className="flex">
              <div className="navbar-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={displayName}
                >
                  <div className="w-10 rounded-full">
                    <img alt="" src={photoURL} />
                  </div>
                </div>
              </div>
              <Link onClick={handleLogOut}>
                <a className="btn md:w-[100px]">Logout</a>
              </Link>
            </div>
          )}

          <div className="ml-2 md:mr-4">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
