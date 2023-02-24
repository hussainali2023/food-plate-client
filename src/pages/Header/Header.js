import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut().then().catch();
  // };

  // const handleShowProfile = () => {
  //   // swal()
  //   toast(`${user?.displayName}`);
  // };

  const handleLogOut = () => {
    logOut().then(toast.success("Logout Successful")).catch();
  };

  return (
    <div>
      <nav className="w-full bg-green-700 text-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to={"/"}>
                <h2 className="text-2xl font-bold">Food Plate</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-white justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=" hover:text-yellow-200">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className=" hover:text-yellow-200">
                  <Link to={"/services"}>All Services</Link>
                </li>
                <li className=" hover:text-yellow-200">
                  <Link to={"/blogs"}>Blogs</Link>
                </li>
                {user?.uid ? (
                  <>
                    <li className=" hover:text-yellow-200">
                      <Link to={"/my-reviews"}>My Reviews</Link>
                    </li>
                    <li className=" hover:text-yellow-200">
                      <Link to={"/add-service"}>Add Services</Link>
                    </li>

                    <button
                      onClick={handleLogOut}
                      className=" bg-violet-400 px-6 py-2 text-white font-semibold rounded-md"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <li className="text-gray-600 hover:text-blue-600">
                    <Link to={"/login"}>
                      <button className=" bg-yellow-400 hover:bg-yellow-300 px-6 py-2 text-white font-semibold rounded-md">
                        Login
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
