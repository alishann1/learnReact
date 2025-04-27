import React from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import About from "./components/pages/about/About";
import Services from "./components/pages/services/Services";
import WorkSkills from "./components/pages/workskills/WorkSkills";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <WorkSkills />
      <Footer />
    </div>
  );
}

export default Layout;
