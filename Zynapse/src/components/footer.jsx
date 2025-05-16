import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
import facebook from "../assets/facebook-app-symbol (1).png";
import snapchat from "../assets/snapchat.png";
import insta from "../assets/instagram.png";
import x from "../assets/twitter.png";

const Footer = () => {
  return (
    <div id="footerContainer">
      <div className="flexContact" id="contactHeading">
        CONTACT US
      </div>
      <div className="flexContact">
        <img id="contactIcon" src={facebook} />
        <img id="contactIcon" src={insta} />
        <img id="contactIcon" src={snapchat} />
        <img id="contactIcon" src={x} />
      </div>
      <div className="flexContact">
        <Link className="ContactLinks" to="/">
          HOME
        </Link>{" "}
        <Link className="ContactLinks" to="/about">
          ABOUT
        </Link>{" "}
        <Link className="ContactLinks" to="/disclaimer">
          DISCLAIMER
        </Link>{" "}
        <Link className="ContactLinks" to="/terms">
          TERMS
        </Link>{" "}
        <Link className="ContactLinks" to="/privacy">
          PRIVACY-POLICY
        </Link>{" "}
      </div>
      <div id="projectName" className="flexContact">
        Zynapse @2025
      </div>
    </div>
  );
};

export default Footer;
