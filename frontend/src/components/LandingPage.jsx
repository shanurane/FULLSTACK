import React, { useState, useEffect } from "react";
import axios from "axios";
import Consultation from "./Consultation";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("URL/projects").then((res) => setProjects(res.data));
    axios.get("URL/clients").then((res) => setClients(res.data));
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    axios
      .post("URL/subscribe", { email })
      .then(() => alert("Subscribed!"))
      .catch((err) => console.error(err));
  };

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
