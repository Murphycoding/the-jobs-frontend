import React from "react";
import NavBar from "../pages/public/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/public/components/Footer";

export default () => {

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar />

      <Outlet />
      <Footer />
    </div>
  );
};
