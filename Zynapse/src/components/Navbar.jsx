import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // ✅ Added useLocation
import logoZynapse from "../assets/zynapse Logo.png";
import "../style/NavbarStyle.css";
import { useAuth } from "../../authContext"; // ✅ Corrected path

const pageNames = {
  "/": "Home",
  "/upload": "Image Upload",
  "/login": "Login",
  "/signup": "Sign Up",
};

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Now correctly imported
  const pageName = pageNames[location.pathname] || "Page";

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id="navbar-flex-div">
      <Link to="/">
        <div>
          <img id="logoNavbar" src={logoZynapse} alt="Logo" />
        </div>
      </Link>
      <div id="pagename">{pageName}</div>
      <div
        id="logout-button"
        onClick={handleLogout}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <button
          style={{
            padding: "8px 15px",
            backgroundColor: "white",
            color: "#ff6347",
            border: "2px solid #ff6347",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f2f2f2")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
