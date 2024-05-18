import React, { useState } from "react";
import logo from "../Media/logo6.jpg";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  //console.log(userData.email);
  //console.log(userData.firstName);

  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout Successfully ! ");
  };
  //console.log(process.env.REACT_APP_ADMIN_EMAIL);

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="fixed shadow-md w-full h-18 px-2 md:px-4 z-50 top-2 bg-white ">
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex iteams-center gap-6 md:gap-11">
          <nav className="gap-6 md:gap-6 text-base md:text-lg hidden md:flex text-slate-600 ">
            <Link to={""}>Home</Link>
            <Link to={"menu/64ea1124bd5e7f1037a8e2f3"}>Menu</Link>
            <Link to={"about"}>About Us</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative ">
            <Link to={"cart"}>
              <PiShoppingCartBold className="w-8 h-8" />
              <div className="absolute -top-2 -right-2  text-center text-white bg-red-500 h-5 w-5 rounded-full m-0 p-0 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div
            className="text-slate-600 text-3xl relative"
            onClick={handleShowMenu}
          >
            <div className=" text-slate-600 relative cursor-pointer w-8 h-8 rounded-full overflow-hidden">
              {userData.image ? (
                <img src={userData.image} className="" />
              ) : (
                <FaRegUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="text-lg absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col rounded min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"New_Product"}
                    className="whitespace-nowrap cursor-pointer  hover:text-pink-400"
                  >
                    New Product
                  </Link>
                )}

                {/* {userData.email === process.env.REACT_APP_ADMIN_EMAIL ||
                  (userData.email && (
                    <Link
                      to={"New_Product"}
                      className="whitespace-nowrap cursor-pointer  hover:text-pink-400"
                    >
                      New Product
                    </Link>
                  ))} */}

                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"Report"}
                    className="whitespace-nowrap cursor-pointer  hover:text-pink-400"
                  >
                    Report
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="whitespace-nowrap cursor-pointer  hover:text-pink-400"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"Login"}
                    className="whitespace-nowrap cursor-pointer  hover:text-pink-400"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col text-slate-600 md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/64ea1124bd5e7f1037a8e2f3"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About Us
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
                {/* <Link
                  to={"SignIn"}
                  className="whitespace-nowrap cursor-pointer hover:text-pink-400"
                >
                  SignIn
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
