import React from "react";
import "./Layout.scss";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

