import React from "react";
import { Navigate } from "react-router-dom";
import useToken, { withToken } from "../../../hooks/use-token";

function SignOutPage() {
  const [token, setToken] = useToken();
  if (token) {
    sessionStorage.clear();
    setToken(null);
    return <Navigate to="/sign-in" state={{ message: "Logout Successful" }} />;
  }
  return <Navigate to="/sign-in" />;
}

export default withToken(SignOutPage);
