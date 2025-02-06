import React from "react";
import linkedin from "../../photos/linkedinn.png";
import { Container } from "@mui/material";
import github from "../../photos/github.png";
import instagram from "../../photos/ig.webp";
import "./Connect.css";
import stars from "../../photos/stars.gif";

const Connect = () => {
  return (
    <div className="connect" id="connect">
      <Container maxWidth={false}>
        <div className="connect-title">
          <img src={stars} alt="stars" className="stars-icon" loading="lazy" />
          <h3>Let's Stay in Touch</h3>
          <img src={stars} alt="stars" className="stars-icon" loading="lazy" />
        </div>

        <div className="socialmedia">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/kristydelacruz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn Profile"
                style={{ width: "150px", height: "150px" }}
              />
            </a>
          </div>
          <div className="github">
            {" "}
            <a
              href="https://github.com/itsskristyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="github"
                style={{
                  width: "100px",
                  height: "100px",
                  paddingRight: "20px",
                }}
              />
            </a>
          </div>
          <div className="insta">
            <a
              href="https://instagram.com/yoitskristyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="github"
                style={{ width: "120px", height: "120px" }}
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Connect;
