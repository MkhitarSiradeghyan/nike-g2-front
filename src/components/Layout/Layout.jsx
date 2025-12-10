import React from "react";
import { Outlet } from "react-router";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import MainForm from "../MainForm/MainForm";

const Layout = () => {
  return (
    <>
    <Banner/>
    <Header/>
      <Outlet />
      <MainForm/>
      
    </>
  );
};

export default Layout;
