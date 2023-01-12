import { Outlet, useLocation } from "react-router-dom";
import { MessengerProvider } from "../hooks/use-messenger";
import authRoutes from "./auth";
import LandingPage from "./auth/landing";
import errorRoutes, { ErrorElement } from "./error";
import privateRoutes from "./private";
import roomRoutes from "./room";

function PageLayout() {
  const location = useLocation();
  const isLanding = ["/sign-in", "/landing"].indexOf(location.pathname) > -1;
  return (
    <MessengerProvider>
      {isLanding && <LandingPage />}
      <Outlet />
    </MessengerProvider>
  );
}

const pageRoutes = [
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorElement />,
    children: [...authRoutes, ...errorRoutes, ...privateRoutes, ...roomRoutes],
  },
];

export default pageRoutes;
