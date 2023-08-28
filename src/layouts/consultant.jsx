import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/consunltant/components/Sidebar";
import AdminNavbar from "../pages/consunltant/components/AdminNavbar";

export default () => {

  return (
    <div className="flex realative dark:bg-main-dark-bg">
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      <div
        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full flex-2`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <AdminNavbar />
          </div>
        <Outlet />
      </div>

    </div>
  );
};
