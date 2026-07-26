import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <div className="pt-5">
      <nav
        className="
          sticky top-5 z-50 mx-12 md:mx-20 rounded-full
          border border-[#48cae4]/40
          bg-[#0077b6]
          shadow-[0_0_30px_rgba(0,119,182,0.45)]
        "
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between py-3">

          {/* Logo */}
          <Link to="/">
            <h1
              className="
                text-2xl font-bold tracking-tight
                text-white
              "
            >
              CV Craft
            </h1>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6">

            <p className="text-white/80 text-sm md:text-base">
              Hi,{" "}
              <span className="font-semibold text-white">
                {user.name}
              </span>
            </p>


            <button
               onClick={logoutUser}
              className="
                px-5 py-2
                rounded-full
                bg-white
                text-[#0077b6]
                font-semibold
                text-sm
                transition-all
                duration-300
                hover:bg-[#023e8a]
                hover:text-white
                hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                active:scale-95
              "
            >
              Logout
            </button>

          </div>


          {/* Mobile Logout */}
          <div className="sm:hidden">
            <button
              onClick={() => navigate("/")}
              className="
                px-4 py-2
                rounded-full
                bg-white
                text-[#0077b6]
                text-sm
                font-semibold
                hover:bg-[#023e8a]
                hover:text-white
                transition-all
                active:scale-95
              "
            >
              Logout
            </button>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;