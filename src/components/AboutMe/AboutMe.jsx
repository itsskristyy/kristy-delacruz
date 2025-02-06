import React from "react";
import { Link } from "react-router-dom";
import selfie from "../../photos/me.JPG";
import "./AboutMe.css";
import { Container } from "@mui/material";

const AboutMe = () => {
  return (
    <div>
      <div className="image-text-container" id="">
        <img src={selfie} alt="example" loading="lazy" />

        <div className="text-container">
          <h4>
            Hi! I'm Kristy De La Cruz and I'm a Software Engineer at Wells
            Fargo.
          </h4>
          <p>
            I am originally from Brooklyn, NY, and have since relocated to
            Charlotte, NC. I hold a Bachelor of Science in Computer Science from
            CUNY Brooklyn College.
          </p>
          <p>
            My passion for technology began in high school when I joined Girls
            Who Code, a nonprofit organization dedicated to closing the gender
            gap in tech by equipping girls with coding skills and career
            opportunities. Through this program, I learned the fundamentals of
            coding and web development, which inspired me to pursue Computer
            Science as my major. Since then, I have been committed to building
            applications that create meaningful impact and empower others.
          </p>{" "}
          <p>
            Outside of work, I enjoy spending time in the Blue Ridge Mountains,
            whether hiking or simply taking in the scenic views. I also love
            going on walks and watching movies—some of my favorites include The
            Twilight Saga and To All the Boys I've Loved Before.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
