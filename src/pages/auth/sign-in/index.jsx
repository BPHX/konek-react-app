import React from "react";
import { Navigate } from "react-router-dom";
import useToken from "../../../hooks/use-token";

function SignInPage() {
  const [token] = useToken();
  // const { state } = useLocation();
  if (token) return <Navigate to="/" />;
}

export default SignInPage;
