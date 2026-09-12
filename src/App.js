import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Nav from "./components/Nav";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";

const pathToSection = {
  "": "top",
  home: "top",
  work: "work",
  experience: "experience",
  about: "about",
  skills: "skills",
};

function scrollToId(id) {
  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Site() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Nikhilesh Ramoliya — Senior Software Engineer";
  }, []);

  useEffect(() => {
    const fromHash = location.hash.replace("#", "");
    const fromPath = location.pathname.replace(/^\//, "");
    scrollToId(fromHash || pathToSection[fromPath] || "top");
  }, [location]);

  return (
    <div className="site">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Impact />
        <SelectedWork />
        <Experience />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Site />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
