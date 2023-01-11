import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth, { withAuth } from "../../hooks/use-auth";
import useToken, { SESSION_TOKEN_KEY, withToken } from "../../hooks/use-token";
import DashboardPage from "./dashboard/dashboard-page";

function PrivateLayout() {
  const [token] = useToken();
  const [loading, user] = useAuth();

  if (!token) return <Navigate to="/landing" />;

  if (loading) return <>Loading</>;

  if (token && !user) {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
    return <Navigate to="/sign-in" state={{ message: "Session Expired" }} />;
  }

  return (
    <>
      Private {token}
      <Outlet />
    </>
  );
}

const PrivateRoute = withToken(withAuth(PrivateLayout));

const privateRoutes = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
];

export default privateRoutes;