import React from "react";
import home from "../../photos/Home.svg";
import { Container } from "@mui/material";
import "../Home/Home.css";
import aboutme from "../../photos/about_me.png";
import connect from "../../photos/connect.png";
import projects from "../../photos/projects.png";
import resume from "../../photos/resume.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home" id="main">
      <Container className="content" maxWidth={false}>
        <img src={home} className="main-image" alt="home" />
        <div className="buttons-container">
          <button className="image-button" onClick={() => navigate("/aboutme")}>
            <img src={aboutme} className="aboutMe" alt="aboutMe" />
          </button>
          <button
            className="image-button"
            onClick={() => navigate("/projects")}
          >
            <img src={projects} className="aboutMe" alt="projects" />
          </button>
          <button className="image-button" onClick={() => navigate("/connect")}>
            <img src={connect} className="aboutMe" alt="connect" />
          </button>
          <a
            className="image-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1m6-uVcGuE3GIin4JXu6Rh-I5vsLro5h5/edit?usp=sharing&ouid=114816480360005205150&rtpof=true&sd=true"
          >
            <img src={resume} className="resume" alt="resume" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Home;
