import React, { Component, useState } from "react";
import navLogo from "../../assests/image/nav-logo.png";
// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCaretDown } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  // state = {};
  // render() {

  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = <div>this menu?</div>;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/business">About us </NavLink>
          </li>
          <li>
            <NavLink to="/SignIn">Sign In</NavLink>
          </li>

          <li>
            <NavLink to="SigIn" class="sign-up">
              Sign up
            </NavLink>
          </li>
        </ul>

        <div className="dropdown">
          <button className="dropbtn" to="/business">
            Doing Business
            <BsCaretDown size={10} style={{ margin: "5px 0 0 3px" }} />
          </button>

          <div className="dropdown-content">
            <NavLink className="hide-link" to="/">
              Become linkdasher
            </NavLink>

            <NavLink className="hide-link" to="/SignIn">
              Be linkpartner Restaurant
            </NavLink>

            <NavLink className="hide-link" to="/">
              Get Dashers for deliveries
            </NavLink>

            <NavLink className="hide-link" to="/">
              Get DoorDash for work
            </NavLink>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" to="/business">
            Get to Know Us
            <BsCaretDown size={10} style={{ margin: "5px 0 0 3px" }} />
          </button>

          <div className="dropdown-content">
            <NavLink className="hide-link" to="/">
              Careers
            </NavLink>

            <NavLink className="hide-link" to="/">
              Investors
            </NavLink>

            <NavLink className="hide-link" to="/">
              Blog
            </NavLink>

            <NavLink className="hide-link" to="/">
              Gift Cards
            </NavLink>

            <NavLink className="hide-link" to="/">
              Stories
            </NavLink>

            <NavLink className="hide-link" to="/">
              Accessibility
            </NavLink>

            <NavLink className="hide-link" to="/About">
              About us
            </NavLink>
          </div>
        </div>
        <span className="menu-icon">
          <FaBars className="fa bar" onClick={() => setShowMenu(!showMenu)} />
          <FaTimes className="fa times" />
        </span>

        {menu}
        <Link to="/">
          <img class="nav-logo" src={navLogo} alt="eathub Logo" />
        </Link>
      </nav>
    </>
  );
  // }
}

export default Navbar;
