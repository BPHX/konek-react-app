import React from "react";
import { Navigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
import "./style.css";
import LoginForm from "./login-form";

function Login() {
  const session = sessionStorage.getItem("token");
  if (session) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="login">
      <div className="login-form">
        <div className="landing-header">
          <a href="/">
            <Logo lg />
          </a>
        </div>
        <div id="form-header">
          <h2>KONEK</h2>
        </div>
        <div id="form-wrapper">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
