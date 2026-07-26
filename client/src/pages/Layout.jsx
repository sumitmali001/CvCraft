import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Login from "./Login";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {user ? (
        <div
          className="
        min-h-screen
        bg-black
        bg-[url('https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      "
        >
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;
