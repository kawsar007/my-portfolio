/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left-logo">
            <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="home"
                 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                 <img src="/images/kaws.jpg" alt="logo" />
                </Link>
              {/* <img src="/images/kaws.jpg" alt="logo" /> */}
            </div>
          </ul>

          {state ? (
            <ul className="navbar_right">
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
              </li> */}
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Porject
                </Link>
              </li>
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
}

export default Navbar;
