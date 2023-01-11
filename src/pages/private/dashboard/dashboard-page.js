import React from "react";
import useAuth from "../../../hooks/use-auth";

export default function DashboardPage() {
  const [, user] = useAuth();
  return <>Welcome {user.firstname}, </>;
}
