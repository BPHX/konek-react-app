import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Logo from "../../components/logo/logo";
import "./style.css";
import LoginForm from "./login-form";

function Login() {
  const session = sessionStorage.getItem("token");
  if (session) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Box className="login">
      <Box className="login-form">
        <Box sx={{ justifyContent: "center", height: "500px" }}>
          <Box mb={14} className="landing-header">
            <Logo lg />
          </Box>
          <Box id="form-wrapper">
            <LoginForm />
          </Box>
          <Box className="signup-text">
            <Typography>
              Dont have an account yet?
              <Link to="/sign-up" className="signup-link">
                {" "}
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
