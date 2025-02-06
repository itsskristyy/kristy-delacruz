import React from "react";
import "./Projects.css";
import { Container } from "@mui/material";
import tictactoe from "./../../photos/tic-tac-toe.png";

const Projects = () => {
  return (
    <div>
      <div className="projects-section">
        <Container>
          <div className="projects">
            {/**
             * hover over image,
             * inside the image you a little text about what are some cool features to it
             * under are the name/tech stacks
             *
             */}
            <p>
              <a
                href="https://github.com/itsskristyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tictactoe} alt="firstproject" className="tictactoe" />
              </a>
              <h2> Tic Tac Toe </h2>
              <p> Tic Tac Toe with a twist... as a player you can: </p>
              <ul>
                <li> compete against your friends or a robot </li>
                <li> change the icon of your piece (x on the screen) </li>
                <li> compete against your friends or a robot </li>
              </ul>
            </p>
          </div>
        </Container>
        {/* <Container>
          <div className="secondProject">
            <h2> First Project </h2>
            <p> in progress </p>
          </div>
        </Container>
        <Container>
          <div className="thirdProject">
            <h2> First Project </h2>
            <p> in progress </p>
          </div>
        </Container> */}
      </div>
    </div>
  );
};
export default Projects;
