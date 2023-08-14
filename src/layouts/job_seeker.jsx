import React from "react";
import { Outlet } from "react-router-dom";


export default () => {
  return (
    <div>
        <p>job_seeker</p>
        <Outlet />
    </div>
  );
};
