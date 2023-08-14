import React from "react";
import { Outlet } from "react-router-dom";


export default () => {

  return (
    <div>
        <p>public</p>
        <Outlet />
    </div>
  );
};