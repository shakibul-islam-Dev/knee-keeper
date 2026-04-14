import React from "react";
import Nav from "../Navigation/Nav";

import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
  return (
    <div className="">
      <Nav></Nav>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
