import React, { useState, useEffect } from "react";
import axios from "axios";
import Consultation from "./Consultation";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="">
      <Consultation />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default LandingPage;
