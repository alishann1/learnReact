import React from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/pages/about/About";

function Layout() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default Layout;
