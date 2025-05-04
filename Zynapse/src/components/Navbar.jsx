import React from "react";
import { Link } from "react-router-dom";
import logoZynapse from "../assets/zynapse Logo.png";
import "../style/NavbarStyle.css";
import { useLocation } from "react-router-dom";

const pageNames = {
  "/": "Home",
  "/upload": "Image Upload",
};
const Navbar = () => {
  const location = useLocation();
  const pageName = pageNames[location.pathname] || "Page";

  return (
    <>
      <div id="navbar-flex-div">
        <Link to="/">
          <div>
            <img id="logoNavbar" src={logoZynapse} />
          </div>
        </Link>
        <div id="pagename">{pageName}</div>
        {/* <Link to="/question">
          <div>
            <img id="logoNavbar" src={logoZynapse} />
          </div>
        </Link> */}
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
