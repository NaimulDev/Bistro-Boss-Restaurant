import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100vh-160px)]">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
