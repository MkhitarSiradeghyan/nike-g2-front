import React from "react";
import { Outlet } from "react-router";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import MainForm from "../MainForm/MainForm";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
    <Banner/>
    <Header/>
      <Outlet />
      <MainForm/>
      <Footer/>
    </>
  );
};

export default Layout;
