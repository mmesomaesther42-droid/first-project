import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      "Login form submitted. Connect authentication to enable real sign-in.",
    );
  }

  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Log in to your SadimHomes account.</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Loginpage;
