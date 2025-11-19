import React from "react";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
