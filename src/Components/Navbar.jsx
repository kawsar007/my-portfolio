/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

function Navbar() {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left-logo">
              <img src="/images/kaws.jpg" alt="logo" />
            </div>
          </ul>

          {state ? (
            <ul className="navbar_right">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Education</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>  
          ) : ""}
          
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
         <FaAlignJustify />
      </div>
    </nav>
  );
}

export default Navbar;
