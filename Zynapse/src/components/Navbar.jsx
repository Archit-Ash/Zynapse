import React from "react";
import { Link } from "react-router-dom";
import logoZynapse from "../assets/zynapse Logo.png";
import "../style/NavbarStyle.css";

const Navbar = () => {
  return (
    <>
      <div id="navbar-flex-div">
        <Link to="/">
          <div>
            <img id="logoNavbar" src={logoZynapse} />
          </div>
        </Link>
        <div>
          <img id="logoNavbar" src={logoZynapse} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
