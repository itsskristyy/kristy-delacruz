import "./App.css";
import Home from "./components/Home/Home";
import Connect from "../src/components/Connect/Connect";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";
import Navigation from "../src/components/Navigation/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/** new commit */}
      {location.pathname !== "/" && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;
