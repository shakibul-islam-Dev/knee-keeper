import React from "react";
import Nav from "../Navigation/Nav";

import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className=" flex flex-col container mx-auto">
      <Nav></Nav>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;
