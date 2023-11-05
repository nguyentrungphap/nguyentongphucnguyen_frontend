import React from "react";

import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const Viewer = () => {
  return (
    <>
      <AppBar />
      <div className="container">
        <Banner /> <NavBar /> <Outlet /> <Footer />
      </div>
      <Copyright />
    </>
  );
};
export default Viewer;
