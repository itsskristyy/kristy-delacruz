import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutme">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/projects"> Projects </NavLink>
            </li>
            {/* <li>
              <NavLink to="/resume"> Resume </NavLink>
            </li> */}
            <li>
              <NavLink to="/connect">Connect With Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
