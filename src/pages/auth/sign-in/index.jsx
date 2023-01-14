import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useToken from "../../../hooks/use-token";

function SignInPage() {
  const [token] = useToken();
  const { state } = useLocation();
  console.log(token);
  if (token) {
    return <Navigate to="/" state={state} />;
  }
}

export default SignInPage;
