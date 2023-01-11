import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppLoader from "../../components/loader/app-loader";
import useAuth, { withAuth } from "../../hooks/use-auth";
import useToken, { SESSION_TOKEN_KEY, withToken } from "../../hooks/use-token";
import DashboardPage from "./dashboard/dashboard-page";

function PrivateLayout() {
  const [token] = useToken();
  const [loading, user] = useAuth();

  if (!token) return <Navigate to="/landing" />;

  if (loading) return <AppLoader />;

  if (token && !user) {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
    return (
      <Navigate
        to="/sign-in"
        state={{ message: "Invalid User / Session Expired" }}
      />
    );
  }

  return (
    <>
      Private {JSON.stringify(user)}
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
