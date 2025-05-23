import React, { useState } from "react";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";
import "./style/logsign.css";

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/"); // Redirect to homepage
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id="firebaseFormContainer">
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id="btnhomepage" className="break" type="submit">
          Sign Up
        </button>

        {/* ➕ Login Button */}
        <button
          className="break"
          id="btnhomepage"
          type="button"
          onClick={() => navigate("/login")}
        >
          Already have an account? Log In
        </button>
      </form>
    </div>
  );
};

export default Signup;
