import React, { useState } from "react";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";
import "./style/logsign.css";
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // Redirect to homepage
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id="firebaseFormContainer">
      <form onSubmit={handleSubmit}>
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
          Login
        </button>

        <button
          id="btnhomepage"
          className="break"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
