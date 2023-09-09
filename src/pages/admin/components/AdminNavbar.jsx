import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import AdminAuthService from "../../../services/admin_auth.service";
import { useNavigate } from "react-router-dom";

import avatar from "./data/avatar.jpg";
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);
const AdminNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  
  const navigate = useNavigate();

  const logout = (event) => {
    AdminAuthService.logout();
    navigate("/");
  };
  
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 text-color1 hover:bg-light-gray rounded-lg"
          onClick={() => logout()}
        >
          LOGOUT
        </div>

        {/* 
              {isClicked.cart && (<Cart />)}
              {isClicked.chat && (<Chat />)}
              {isClicked.notification && (<Notification />)}
              {isClicked.userProfile && (<UserProfile />)} */}
      </div>
    </div>
  );
};

export default AdminNavbar;
